pipeline {
    agent any

    nodejs('18.9.1') {
        
    stages {
        stage('Install Packages') {
          sh 'npm install'
        }
        stage('Run Unit Tests') {
          sh 'npm run test'
        }
    }
  }
}
        

