pipeline {
    agent any

    stages {
        stage('Instalation') {
            steps {
               sh npm install
            }
        }
        stage('Run test') {
            steps {
                sh npm run test
            }
        }
    }
}