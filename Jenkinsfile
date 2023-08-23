#!/usr/bin/env groovy
// def CONFIG = readYaml text: "${env.PIPELINE_CONFIG}"
// def SONARSCANNER_IMAGE = CONFIG.SONAR_AGENT == null ? "sonarsource/sonar-scanner-cli" : CONFIG.SONAR_AGENT
// def DOCKER_AGENT = CONFIG.DOCKER_AGENT == null ? "gcr.io/clover-container-registries/node-web:latest" : CONFIG.DOCKER_AGENT
// def MAIN_BRANCH_NAME = CONFIG.MAIN_BRANCH_NAME == null ? "main" : CONFIG.MAIN_BRANCH_NAME
// def STORYBOOK_BRANCH_NAME = CONFIG.STORYBOOK_BRANCH_NAME == null ? "storybook" : CONFIG.STORYBOOK_BRANCH_NAME
// def DISABLE_STORYBOOK = (CONFIG.DISABLE_STORYBOOK == null) ? 'null' : true
// def NPM_REGISTRY_URI = CONFIG.NPM_REGISTRY_URI == null ? "artifactory.corp.clover.com/artifactory/api/npm/npm-local" : CONFIG.NPM_REGISTRY_URI
// def SCOPE = CONFIG.SCOPE == null ? '@clover' : CONFIG.SCOPE
// def CACHE_VOL = "/home/jenkins/.cache:/home/node/.cache"
// def TIMEOUT_MINS = (CONFIG.TIMEOUT_MINS==null) ? env.GLOBAL_TIMEOUT_MINS : CONFIG.TIMEOUT_MINS
// def KEEP_ARTIFACT_DAYS = (CONFIG.KEEP_ARTIFACT_DAYS==null) ? env.GLOBAL_KEEP_ARTIFACT_DAYS : CONFIG.KEEP_ARTIFACT_DAYS
// def KEEP_ARTIFACT_NUM = (CONFIG.KEEP_ARTIFACT_NUM==null) ? env.GLOBAL_KEEP_ARTIFACT_NUM : CONFIG.KEEP_ARTIFACT_NUM
// def KEEP_BUILD_DAYS = (CONFIG.GLOBAL_KEEP_BUILD_DAYS==null) ? env.GLOBAL_KEEP_BUILD_DAYS : CONFIG.GLOBAL_KEEP_BUILD_DAYS
// def KEEP_BUILD_NUM = (CONFIG.KEEP_KEEP_BUILD_NUM==null) ? env.GLOBAL_KEEP_BUILD_NUM : CONFIG.KEEP_KEEP_BUILD_NUM


def SONARSCANNER_IMAGE = "sonarsource/sonar-scanner-cli" 
def DOCKER_AGENT =  "gcr.io/clover-container-registries/node-web/node18.12"
def MAIN_BRANCH_NAME = "main"
def STORYBOOK_BRANCH_NAME = "storybook"
def DISABLE_STORYBOOK = 'null'
def NPM_REGISTRY_URI = "artifactory.corp.clover.com/artifactory/api/npm/npm-local"
def SCOPE = '@clover'
def CACHE_VOL = "/home/jenkins/.cache:/home/node/.cache"
def TIMEOUT_MINS =  env.GLOBAL_TIMEOUT_MINS 
def KEEP_ARTIFACT_DAYS =  env.GLOBAL_KEEP_ARTIFACT_DAYS
def KEEP_ARTIFACT_NUM = env.GLOBAL_KEEP_ARTIFACT_NUM
def KEEP_BUILD_DAYS = env.GLOBAL_KEEP_BUILD_DAYS 
def KEEP_BUILD_NUM = env.GLOBAL_KEEP_BUILD_NUM

pipeline {
  environment {
    PKG_SCOPE = "${SCOPE}"

    REGISTRY_URI = "${NPM_REGISTRY_URI}"
    GHE_API_URL = "https://github.corp.clover.com/api/v3"
    GIT_REPO = env.GIT_URL.replaceFirst(/^.*\/([^\/]+?).git$/, '$1')

    GIT_AUTHOR_NAME = "jenkins-corp"
    GIT_AUTHOR_EMAIL = "jenkins-corp@clover.com"
    GIT_COMMITTER_NAME = "jenkins-corp"
    GIT_COMMITTER_EMAIL = "jenkins-corp@clover.com"
    NPM_EMAIL = "jenkins-corp@clover.com"
    HOME = pwd()
  }
  agent {
    label "${env.MEDIUM_AGENT_LABEL}"
  }
  options {
    timeout(time: "${TIMEOUT_MINS}", unit: "MINUTES")
    buildDiscarder(logRotator(artifactDaysToKeepStr: "${KEEP_ARTIFACT_DAYS}", artifactNumToKeepStr: "${KEEP_ARTIFACT_NUM}", daysToKeepStr: "${KEEP_BUILD_DAYS}", numToKeepStr: "${KEEP_BUILD_NUM}"))
  }
  stages {
    stage('Check for previous build') {
      steps {
        abortPreviousPrBuild()
      }
    }
    stage("Bootstrap") {
      steps {
        gcrLogin()
      }
    }

    stage("Build & Test") {
      agent {
        docker {
          image "${DOCKER_AGENT}"
          reuseNode true
          args "-v /home/jenkins/.ssh:/home/node/.ssh:ro " +
            "-v ${CACHE_VOL} " +
            "-v /home/jenkins/.npmrc:/home/node/.npmrc " +
            "-v /home/jenkins/.config:/home/node/.config"
        }
      }
      steps {
        sh script: "node --version"
        sh script: "npm --version"
        sh script: "yarn install --frozen-lockfile", label: "Install"
        sh script: "yarn lint", label: "Lint"
        sh script: "yarn build", label: "Build"
        sh script: "yarn test --coverage", label: "Test with Coverage"
      }
      post {
        always {
          junit testResults: '**/test-results-jest.xml', allowEmptyResults: true
          publishHTML target: [
            allowMissing         : false,
            alwaysLinkToLastBuild: false,
            keepAll              : true,
            reportDir            : 'coverage/lcov-report',
            reportFiles          : 'index.html',
            reportName           : 'Coverage Report'
          ]
        }
      }
    }

    stage('Scan & Publish') {
      parallel {
        // stage('SonarQube Scan') {
        //   // This stage will use the Test Coverage Data generated at 'Unit Tests' stage
        //   agent {
        //     docker {
        //       image "${SONARSCANNER_IMAGE}"
        //       reuseNode true
        //       args "-v ${CACHE_VOL} "
        //     }
        //   }
        //   steps {
        //     withSonarQubeEnv('sonarqube.corp.clover.com') {
        //       sh "sonar-scanner"
        //     }
        //   }
        // }

        stage("Publish") {
          when {
            allOf {
              expression { env.IS_TEST_ENVIRONMENT != "true" }
              branch "${MAIN_BRANCH_NAME}"
            }
          }
          agent {
            docker {
              image "${DOCKER_AGENT}"
              reuseNode true
              args "-v /home/jenkins/.ssh:/home/node/.ssh:ro " +
                "-v ${CACHE_VOL} " +
                "-v /home/jenkins/.npmrc:/home/node/.npmrc " +
                "-v /home/jenkins/.config:/home/node/.config"
            }
          }
          steps {
            withCredentials([usernamePassword(credentialsId: "jenkins-corp-oath",
              passwordVariable: "GH_TOKEN",
              usernameVariable: "GH_USER")]) {

              // enable git god mode
              sh 'git remote set-url origin https://${GH_USER}:${GH_TOKEN}@github.corp.clover.com/clover/${GIT_REPO}.git'

              // fetch everything
              sh "git fetch --depth=1 --all --tags"

              // checkout main branch
              sh "git checkout ${MAIN_BRANCH_NAME}"

              // version with lerna
              sh script: "yarn ci:version"
            }
          }
          post {
            always {
              withCredentials([usernamePassword(credentialsId: "jenkins-artifactory-npm-deploy",
                  passwordVariable: "NPM_PASSWORD",
                  usernameVariable: "NPM_USERNAME")]) {

                  sh 'npm config set "${PKG_SCOPE}:registry" "https://${REGISTRY_URI}"'
                  sh 'npm config set "//${REGISTRY_URI}:_password" "${NPM_PASSWORD}"'
                  sh 'npm config set "//${REGISTRY_URI}:username" "${NPM_USERNAME}"'
                  sh 'npm config set "//${REGISTRY_URI}:email" "${NPM_EMAIL}"'
                  sh 'npm config set "//${REGISTRY_URI}:auth-type" "legacy"'

                  // tell git to ignore .npmrc changes
                  sh "git update-index --assume-unchanged .npmrc"
                }

              // publish with lerna
              sh script: "yarn ci:publish"
            }
          }
        }
      }
    }

    stage('Storybook') {
      when {
        allOf {
          expression { env.IS_TEST_ENVIRONMENT != "true" }
          expression { "${DISABLE_STORYBOOK}" == 'null' }
          branch "${MAIN_BRANCH_NAME}"
        }
      }
      agent {
        docker {
          image "${DOCKER_AGENT}"
          reuseNode true
          args "-v /home/jenkins/.ssh:/home/node/.ssh:ro " +
            "-v ${CACHE_VOL} " +
            "-v /home/jenkins/.npmrc:/home/node/.npmrc " +
            "-v /home/jenkins/.config:/home/node/.config"
        }
      }
      steps {
        withCredentials([usernamePassword(credentialsId: "jenkins-corp-oath",
          passwordVariable: "GH_TOKEN",
          usernameVariable: "GH_USER")]) {

          // enable git god mode
          sh 'git remote set-url origin https://${GH_USER}:${GH_TOKEN}@github.corp.clover.com/clover/${GIT_REPO}.git'

          // fetch everything
          sh "git fetch --depth=1 --all --tags"

          // checkout main branch
          sh "git checkout ${MAIN_BRANCH_NAME}"

          sh "git checkout -B ${STORYBOOK_BRANCH_NAME} ${MAIN_BRANCH_NAME}"

          sh "yarn build-storybook"

          sh "git add -f docs"

          sh "git commit -m \"doc(chore): Generate Storybook\""

          sh "git push -f origin storybook"
        }
      }
    }

  }

  post {
    success {
      echo "Build finished successfully!"
    }
    failure {
      echo "Build FAILED!"
    }
    cleanup {
      cleanWs()  // cleans up the "workspace"
    }
  }
}