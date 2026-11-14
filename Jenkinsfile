pipeline{
    agent any

    stages{
        stage('Install Dependencies'){
            steps{
                bat 'npm ci'
            }
        }
        stage('Run resepai e2e test'){
            steps{
                bat 'npx playwright test'
            }
        }
    }
      post{
        always{
            archiveArtifacts artifacts: 'playwright-report/**/*', allowEmptyArchive: true
            }
        }
}