pipeline {
  agent any
  tools {nodejs "16.13.2"}
  stages {
    stage('preflight') {
      steps {
        sh 'node -v'
      }
    }
    stage('build') {
      steps {
        sh 'npm install'
      }
    }
    stage('test') {
      steps {
        sh 'npm run test'
      }
    }
  }
}