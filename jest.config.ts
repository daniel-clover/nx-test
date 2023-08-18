import { getJestProjects } from '@nx/jest';
import '@testing-library/jest-dom';

export default {
  projects: getJestProjects(),
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js']
};
