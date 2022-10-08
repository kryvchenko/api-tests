pipeline {
    agent any

    stages {
        stage('Instalation') {
            steps {
                script {
                   run npm install
                }
            }
        }
        stage('Run test') {
            steps {
                script {
                   run npm run test
                }
            }
        }
    }
}