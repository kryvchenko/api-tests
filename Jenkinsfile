pipeline {
    agent any

    stages {
        stage('Install Packages') {
          sh 'npm install'
        }
        stage('Run Unit Tests') {
          sh 'npm run test'
        }
    }
}
        

