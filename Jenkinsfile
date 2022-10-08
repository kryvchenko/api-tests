pipeline {
  agent any
  tools {nodejs "18.10.0"}
  stages {
    stage('preflight') {
      steps {
        script {
            if (isUnix()) {
                 sh 'node -v'
            } else {
                bat 'node -v'
            }
        }
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
