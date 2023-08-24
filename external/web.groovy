import com.clover.Permissions
import com.clover.configDrivenPipeline

String basePath = 'web'
String applications = basePath + '/apps'
String core = basePath + '/core'
String modules = basePath + '/modules'
String configurations = basePath + '/config'
String tools = basePath + '/tools'
String assets = basePath + '/assets'

def userPermissions = [
    "GROUP:clover*web-core-libraries": Permissions.ADMIN_ITEM + Permissions.ADMIN_RUN + Permissions.ADMIN_VIEW,
]


folder("${basePath}") {
    description('Jobs')
    Permissions.FolderPermissions(delegate,userPermissions)
}
folder("${applications}") {
    description('micro-apps')
}
folder("${core}") {
    description('Code')
}
folder("${modules}") {
    description('modules and libraries')
}
folder("${configurations}") {
    description('configs and settings')
}
folder("${tools}") {
    description('tools')
}
folder("${assets}") {
    description('assets stored on cloverstatic.com')
}

def jenkinsJobs = [
    [repo: "web-app-dashboard-navigation", path: "${applications}", type: "config"],
    [repo: 'web-data-layer', path: "${modules}", type: "config"],
    [repo: 'web-lib-online-ordering', path: "${modules}", type: "config"],
    [repo: "web-lib-reporting-components", path: "${modules}", type: "config"],
    [repo: "web-lib-pos-components", path: "${modules}", type: "config"],
    [repo: "web-app-ebb-india", path: "${applications}", type: "config"],
    [repo: "web-app-fiserv-reporting", path: "${applications}", type: "config"],
    [repo: "web-app-refund-flow", path: "${applications}", type: "config"],
    [repo: "web-app-ebb-portal", path: "${applications}", type: "config"],
    [repo: "web-app-online-retail", path: "${applications}", type: "config"],
    [repo: "web-app-virtual-terminal", path: "${applications}", type: "config"],
    [repo: "web-app-menus", path: "${applications}", type: "config"],
    [repo: "web-app-business-details", path: "${applications}", type: "config"],
    [repo: "web-app-account-and-setup", path: "${applications}", type: "config"],
    [repo: "web-app-register-olo", path: "${applications}", type: "config"],
    [repo: "web-app-developer-dashboard-demo", path: "${applications}", type: "config"],
    [repo: "web-app-pyz-hco-dashboard", path: "${applications}", type: "config"],
    [repo: "web-app-pay-widget-setup", path: "${applications}", type: "config"],
    [repo: "web-app-setup-online-ordering", path: "${applications}", type: "config"],
    [repo: "web-app-inventory", path: "${applications}", type: "config"],
    [repo: "web-app-consumer-settings", path: "${applications}", type: "config"],
    [repo: "web-app-help-me", path: "${applications}", type: "config"],
    [repo: "web-app-disputes", path: "${applications}", type: "config"],
    [repo: "web-app-customers", path: "${applications}", type: "config"],
    [repo: "web-app-feedback", path: "${applications}", type: "config"],
    [repo: "web-app-mss-bank-details", path: "${applications}", type: "config"],
    [repo: "web-app-market", path: "${applications}", type: "config"],
    [repo: 'clover-fastauth', path: "${modules}", type: "config"],
    [repo: 'second-party-integration-sdk', path: "${modules}", type: "config"],
    [repo: "web-app-codat", path: "${applications}", type: "config"],
    [repo: "web-app-ecomm-fraud-vas", path: "${applications}", type: "config"],
    [repo: "web-app-setup-orders", path: "${applications}", type: "config"],
    [repo: "web-app-dashboard3", path: "${applications}", type: "config"],
    [repo: "web-app-gift-cards", path: "${applications}", type: "config"],
    [repo: "web-app-clover-capital", path: "${applications}", type: "config"],
    [repo: "web-app-rapid-deposit", path: "${applications}", type: "config"],
    [repo: "web-app-web-chat", path: "${applications}", type: "config"],
    [repo: "web-app-profile-page", path: "${applications}", type: "config"],
    [repo: "web-app-ecomm-settings", path: "${applications}", type: "config"],
    [repo: "web-app-clover-reporting", path: "${applications}", type: "config"],
    [repo: "web-app-first-time-use", path: "${applications}", type: "config"],
    [repo: "web-app-sales-activity", path: "${applications}", type: "config"],
    [repo: "web-app-collections", path: "${applications}", type: "config"],
    [repo: "web-app-dining", path: "${applications}", type: "config"],
    [repo: "web-app-invoices", path: "${applications}", type: "config"],
    [repo: "web-app-document-upload", path: "${applications}", type: "config"],
    [repo: "web-app-dashboard-help", path: "${applications}", type: "config"],
    [repo: "web-app-employees", path: "${applications}", type: "config"],
    [repo: "web-app-payroll", path: "${applications}", type: "config"],
    [repo: "web-app-point-of-sale-setup", path: "${applications}", type: "config"],
    [repo: "web-app-pos-setup", path: "${applications}", type: "config"],
    [repo: "growth-web-lib", path: "${modules}", type: "config"],
    [repo: "web-lib-sprout", path: "${modules}", type: "config"],
    [repo: 'web-app-invoice-plan-manager', path: "${applications}", type: "config"],
    [repo: "web-app-merchant-profile", path: "${applications}", type: "config"],
    [repo: 'web-lib-micro-app-config', path: "${modules}", type: "config"],
    [repo: 'web-lib-loyalty', path: "${modules}", type: "config"],
    [repo: 'web-lib-core-styles', path: "${modules}", type: "config"],
    [repo: 'generator-microapp', path: "${modules}", type: "config"],
    [repo: "web-app-melio", path: "${applications}", type: "config"],
    [repo: "web-app-orders", path: "${applications}", type: "config"],
    [repo: "web-mobile", path: "${core}", type: "jenkinsfile"],
    [repo: 'web-mosaic', path: "${core}", type: "jenkinsfile"],
    [repo: 'web-remotes-function', path: "${core}", type: "jenkinsfile"],
    [repo: 'web-lib-heap-nexus', path: "${modules}", type: "jenkinsfile"],
    [repo: 'web-lib-icons', path: "${modules}", type: "jenkinsfile"],
    [repo: 'cloverstatic-content', path: "${assets}", type: "jenkinsfile"],
    [repo: 'web-types', path: "${modules}", type: "jenkinsfile"],
    [repo: 'web-pt-common', path: "${tools}", type: "jenkinsfile"],
    [repo: 'help-me-content', path: "${assets}", type: "jenkinsfile"],
    [repo: 'web-walkme', path: "${assets}", type: "jenkinsfile"],
    [repo: 'lint-config', path: "${configurations}", type: "jenkinsfile"],
    [repo: "node-utils", path: "${modules}", type: "jenkinsfile"],
    [repo: 'microapp-toolkit', path: "${modules}", type: "jenkinsfile"],
    [repo: 'component-generator', path: "${modules}", type: "jenkinsfile"],
    [repo: 'docs-search', path: "${modules}", type: "jenkinsfile"],
    [repo: "web-runtime-utils", path: "${modules}", type: "jenkinsfile"],
    [repo: 'web-portal', path: "${core}", type: "config"],
    [repo: "scan-to-pay", path: "${core}", type: "jenkinsfile"],
    [repo: 'cs-portal-web', path: "${core}", type: "config"],
    [repo: 'web-legacy', path: "${core}", type: "jenkinsfile"],
    [repo: 'developer-platform-web', path: "${core}", type: "config"],
    [repo: 'web-global-developer', path: "${core}", type: "config"],
    [repo: 'developer-dashboard-web', path: "${core}", type: "jenkinsfile"],
    [repo: 'self-boarding-ui', path: "${core}", type: "jenkinsfile"],
    [repo: 'web-order-ahead', path: "${core}", type: "jenkinsfile"],
    [repo: "consumer-web-profile", path: "${core}", type: "jenkinsfile"],
    [repo: 'web-lib-cdk', path: "${modules}", type: "jenkinsfile"],
    [repo: 'web-checkout', path: "${core}", type: "config"],
    [repo: 'web-lib-consumer-ui', path: "${modules}", type: "jenkinsfile"],
    [repo: 'web-lib-utilities', path: "${modules}", type: "jenkinsfile"],
    [repo: 'web-lib-components', path: "${modules}", type: "jenkinsfile"],
    [repo: 'web-marketplace', path: "${tools}", type: "jenkinsfile"],
    [repo: 'cloverdotcom', path: "${core}", type: "config"],
    [repo: 'web-self-boarding', path: "${core}", type: "jenkinsfile"],
    [repo: 'web-lib-core', path: "${modules}", type: "jenkinsfile"],
    [repo: "web-preview-cleanup", path: "${tools}", type: "jenkinsfile"],
    [repo: "web-consumer-loyalty", path: "${core}", type: "jenkinsfile"],
    [repo: "web-consumer-loyalty-function", path: "${core}", type: "jenkinsfile"],
    [repo: "clover-sport-fans", path: "${core}", type: "config"],
    [repo: "web-platform-docs", path: "${tools}", type: "jenkinsfile"],
    [repo: "mosaic-extension", path: "${tools}", type: "jenkinsfile"],
    [repo: 'web-lib-sprout', path: "${modules}", type: "jenkinsfile"],
    [repo: 'cloverdotcom-sitemap-generator', path: "${tools}", type: "jenkinsfile"],

]
jenkinsJobs.each { Map config ->
    multibranchPipelineJob("${config.path}/${config.repo}") {
        branchSources {
            branchSource {
                source {
                    github {
                        apiUri("https://github.corp.clover.com/api/v3")
                        id("${config.path}-${config.repo}") // IMPORTANT: use a constant and unique identifier
                        repositoryUrl("https://github.corp.clover.com/clover/${config.repo}")
                        configuredByUrl(true)
                        repoOwner('clover')
                        repository("${config.repo}")
                        credentialsId('jenkins-corp-oath')
                        description("This job is managed by jenkins DSL job changes will be over written by: https://github.corp.clover.com/clover/jenkins-dsl-jobs.")



                        if ("${config.repo}" != "web-walkme") {
                            traits {
                                gitHubBranchDiscovery {
                                    // Discover branches
                                    // Exclude branches that are also files as PRs
                                    strategyId(1)
                                }
                                gitHubPullRequestDiscovery {
                                    // Discover pull requests from origin
                                    // Merging the pull request with the current target branch revision
                                    strategyId(1)
                                }
                                headWildcardFilter {
                                    // Filter by name (with wildcards)
                                    includes('master develop main release* PR* jenkins_v2')
                                    excludes("")
                                }
                            }
                        } else {
                            traits {
                                gitHubBranchDiscovery {
                                    // Discover branches
                                    // Exclude branches that are also files as PRs
                                    strategyId(1)
                                }
                                gitHubPullRequestDiscovery {
                                    // Discover pull requests from origin
                                    // Merging the pull request with the current target branch revision
                                    strategyId(1)
                                }
                                headWildcardFilter {
                                    // Use GitLFSPull
                                    gitLFSPullTrait()
                                    // Filter by name (with wildcards)
                                    includes('master develop main release* PR* jenkins_v2')
                                    excludes("")
                                }
                            }
                        }
                    }
                }
                strategy {
                    allBranchesSame {
                        props {
                            suppressAutomaticTriggering {
                                strategy("INDEXING")
                                triggeredBranchesRegex(".*?")
                            }
                        }
                    }
                }
            }
        }
        if ("${config.type}" == "config") {
            configDrivenPipeline.configureFactory(delegate, 'JenkinsConfig.yaml')
        }
        triggers {
            // Since we are keeping old jobs around for 1 day, we need to scan daily to know when they are too old
            periodicFolderTrigger {
                interval("1d")
            }
        }
        orphanedItemStrategy {
            discardOldItems {
                daysToKeep(1)
            }
        }
    }
}

pipelineJob("${tools}/web-deploy") {
    description('Shim job that handles both new GCP envs via rundeck and legacy envs via ssh/scp')
    logRotator {
        numToKeep(300)
    }
    parameters {
        choice {
            name('APP_NAME')
            description('Which web artifact to deploy')
            choices(['cloverdotcom', 'helpcenter', 'shop', 'web-internal', 'web-legacy', 'web-self-boarding', 'web-order-ahead', 'web-portal', 'developer-platform-web', 'cs-portal-web'])
        }
        string {
            name('ENV_NAME')
            defaultValue('')
            description('The environment to deploy to (example: dev1).  ' +
                'Note Dev deploys currently assume dev artifact paths in artifactory')
            trim(true)
        }
        string {
            name('VERSION')
            defaultValue('')
            description('The 40-character hash, if a committish is passed, the job will attempt to ' +
                'resolve that to a hash')
            trim(true)
        }
    }

    definition {
        cpsScm {
            scm {
                git {
                    remote {
                        url('git@github.corp.clover.com:clover/web-deploy-shim.git')
                        credentials('jenkins-corp-rsa')
                    }
                    branch('*/master')
                }
            }
            lightweight(true)
        }
    }
}

//
//WALKME JOBS
//
pipelineJob("${tools}/walk-me-sync") {
    description('Sync Walk Me Files and create a PR')
    logRotator {
        numToKeep(300)
    }

    definition {
        cpsScm {
            scm {
                git {
                    remote {
                        url('https://github.corp.clover.com/clover/web-walkme.git')
                        credentials('jenkins-corp-oath')
                    }
                    branch('*/master')
                    extensions{
                        cleanBeforeCheckout()
                        gitLFSPull()
                    }
                }
            }
            lightweight(false)
            scriptPath('Jenkinsfile.sync')
        }
    }
}

// Preview Cleanup Job
pipelineJob("${tools}/cleanup-web-previews") {
    description('Cleanup job for web app previews. Provides automated hygiene for our dev-managed storage bucket.')
    logRotator {
        numToKeep(300)
    }
    parameters {
        string {
            name('APP_REPO_NAME')
            defaultValue('')
            description('The repository name of the web application to be cleaned up.')
            trim(true)
        }
        choice {
            name('APP_NAMESPACE')
            description('The namespace of the application - "standard" or "internal"')
            choices(['standard', 'internal'])
        }
    }
    definition {
        cpsScm {
            scm {
                git {
                    remote {
                        url('git@github.corp.clover.com:clover/web-preview-cleanup.git')
                        credentials('jenkins-corp-rsa')
                    }
                    branch('*/main')
                }
            }
            lightweight(true)
            scriptPath('Jenkinsfile.cleanup')
        }
    }
}

// Artifactory Repo Document Generator
pipelineJob("${tools}/artifactory-repo-docgenerator") {
    description('Document generator from the artifactory repository.')
    logRotator {
        numToKeep(300)
    }
    parameters {
        string {
            name('ARTIFACTORY_REPO_NAME')
            defaultValue('')
            description('The repository name of the artifactory to generate the document.')
            trim(true)
        }
        string {
            name('PACKAGE_VERSION')
            defaultValue('')
            description('Package version to generate the document.')
            trim(true)
        }
        string {
            name('RELEASE_TAG')
            defaultValue('')
            description('Release Tag Info')
            trim(true)
        }
    }
    definition {
        cpsScm {
            scm {
                git {
                    remote {
                        url('git@github.corp.clover.com:clover/web-marketplace.git')
                        credentials('jenkins-corp-rsa')
                    }
                    branch('*/main')
                }
            }
            lightweight(true)
            scriptPath('Jenkinsfile.artifactory-docsgenerator')
        }
    }
}

// cloverdotcom static site generator
pipelineJob("${tools}/cloverdotcom-generator") {
    description('Clover.com static file generation for SEO.')
    logRotator {
        numToKeep(300)
    }
    parameters {
        string {
            name('BASEPATH')
            defaultValue('https://www.clover.com')
            description('The base URL for site crawling.')
            trim(true)
        }
        choice {
            name('DEPLOYMENT_ENV')
            choices(['dev', 'prod'])
            description('The target bucket for deployment.')
        }
    }
    properties {
        pipelineTriggers{
            triggers{
                parameterizedCron {
                    parameterizedSpecification('''
                        # default EOD crawl of clover.com (6pm PDT = 1am GMT):
                        0 1 * * *  % DEPLOYMENT_ENV=prod;CI=true
                    ''')
                }
            }
        }
    }
    definition {
        cpsScm {
            scm {
                git {
                    remote {
                        url("git@github.corp.clover.com:clover/cloverdotcom-generator.git")
                        credentials('jenkins-corp-rsa')
                    }
                    branch('*/main')
                }
            }
            scriptPath("Jenkinsfile")
            lightweight(false)
        }
    }
}

listView('Web Builds 2.0') {
    description('Web builds with jenkinsfiles')
    recurse()
    jobs {
        jenkinsJobs.each { Map config ->
            name("${config.path}/${config.repo}")
        }
        name("${tools}/web-deploy")
        name("${tools}/walk-me-sync")
    }
    columns {
        favoriteColumn()
        weather()
        name()
        lastSuccess()
        lastFailure()
        lastDuration()
    }
}