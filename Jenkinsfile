pipeline {
    agent any

    stages {
        stage('Instalation') {
            steps {
                script {
                    npm install
                }
            }
        }
        stage('Run test') {
            steps {
                script {
                    npm run test
                }
            }
        }
    }
}