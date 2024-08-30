# checkout open edx frontend repos
mkdir .projects
(
  cd .projects &&
  git clone git@github.com:openedx/credential-themes.git --depth 1
  git clone git@github.com:openedx/credentials.git --depth 1
  git clone git@github.com:openedx/edx-enterprise.git --depth 1
  git clone git@github.com:openedx/edx-ora2.git --depth 1
  git clone git@github.com:openedx/edx-platform.git --depth 1
  git clone git@github.com:openedx/frontend-app-account.git --depth 1
  git clone git@github.com:openedx/frontend-app-admin-portal.git --depth 1
  git clone git@github.com:openedx/frontend-app-authn.git --depth 1
  git clone git@github.com:openedx/frontend-app-communications.git --depth 1
  git clone git@github.com:openedx/frontend-app-course-authoring.git --depth 1
  git clone git@github.com:openedx/frontend-app-discussions.git --depth 1
  git clone git@github.com:openedx/frontend-app-ecommerce.git --depth 1
  git clone git@github.com:openedx/frontend-app-enterprise-public-catalog.git --depth 1
  git clone git@github.com:openedx/frontend-app-gradebook.git --depth 1
  git clone git@github.com:openedx/frontend-app-learner-portal-enterprise.git --depth 1
  git clone git@github.com:openedx/frontend-app-learner-portal-programs.git --depth 1
  git clone git@github.com:edx/frontend-app-learner-record.git --depth 1
  git clone git@github.com:openedx/frontend-app-learning.git --depth 1
  git clone git@github.com:openedx/frontend-app-library-authoring.git --depth 1
  git clone git@github.com:edx/frontend-app-ora-grading.git --depth 1
  git clone git@github.com:openedx/frontend-app-payment.git --depth 1
  git clone git@github.com:openedx/frontend-app-profile.git --depth 1
  git clone git@github.com:openedx/frontend-app-program-console.git --depth 1
  git clone git@github.com:openedx/frontend-app-publisher.git --depth 1
  git clone git@github.com:openedx/frontend-app-support-tools.git --depth 1
  git clone git@github.com:openedx/frontend-component-cookie-policy-banner.git --depth 1
  git clone git@github.com:edx/frontend-component-header-edx.git --depth 1
  git clone git@github.com:openedx/frontend-component-header.git --depth 1
  git clone git@github.com:openedx/frontend-enterprise.git --depth 1
  git clone git@github.com:openedx/frontend-learner-portal-base.git --depth 1
  git clone git@github.com:edx/frontend-lib-special-exams.git --depth 1
  git clone git@github.com:openedx/frontend-platform.git --depth 1
  git clone git@github.com:openedx/frontend-template-application.git --depth 1
  git clone git@github.com:edx/prospectus.git --depth 1
  git clone git@github.com:openedx/studio-frontend.git --depth 1
  git clone git@github.com:edx/frontend-app-communications --depth 1
  git clone git@github.com:edx/frontend-app-learner-dashboard.git -- depth 1
)
