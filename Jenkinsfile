pipeline {
  agent any
  tools {nodejs "18.10.0"}
  stages {
    stage('preflight') {
     if (isUnix()) { 
        steps {
        sh 'node -v'
      }
     } else {
        steps {
        bat 'node -v'
      }
     }
    }
    stage('build') {
     if (isUnix()) {    
      steps {
        sh 'npm install'
      }
     } else {
        steps {
        bat 'npm install'
      }
     }
    }
    stage('test') {
    if (isUnix()) { 
      steps {
        sh 'npm run test'
      }
    } else {
        steps {
        bat 'npm run test'
      }
    }
    }
  }
}
