pipeline {
  agent any
  tools {nodejs "18.9.0"}
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