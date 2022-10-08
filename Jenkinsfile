pipeline {
    agent any

    stages {
        stage('Instalation') {
            steps {
                npm install
            }
        }
    }
    stages {
        stage('Run test') {
            steps {
                npm run test
            }
        }
    }
}