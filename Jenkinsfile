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
        if (isUnix()) {
                 sh 'npm install'
            } else {
                bat 'npm install'
            }
      }
    }
    stage('test') {
      steps {
        if (isUnix()) {
                 sh 'npm run test'
            } else {
                bat 'npm run test'
            }
      }
    }
  }
}
