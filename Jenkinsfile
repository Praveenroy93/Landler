pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Run Mocha tests
                    sh 'npm test'
                }
            }
        }

        stage('Generate Report') {
            steps {
                script {
                    // Generate Mochawesome HTML report
                    sh 'npm run generate-report'
                }
            }
        }
    }

    post {
        always {
            // Archive test and report results
            archiveArtifacts 'mochawesome-report/*.json'
            archiveArtifacts 'report/*.html'
        }
    }
}
