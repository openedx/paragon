# checkout open edx frontend repos
mkdir .projects
(
  cd .projects &&
  git clone git@github.com:edx/edx-platform.git --depth 1
  git clone git@github.com:edx/frontend-app-account.git --depth 1
  git clone git@github.com:edx/frontend-app-admin-portal.git --depth 1
  git clone git@github.com:edx/frontend-app-authn.git --depth 1
  git clone git@github.com:edx/frontend-app-course-authoring.git --depth 1
  git clone git@github.com:edx/frontend-app-discussions.git --depth 1
  git clone git@github.com:edx/frontend-app-ecommerce.git --depth 1
  git clone git@github.com:edx/frontend-app-gradebook.git --depth 1
  git clone git@github.com:edx/frontend-app-learner-portal-enterprise.git --depth 1
  git clone git@github.com:edx/frontend-app-learner-portal-programs.git --depth 1
  git clone git@github.com:edx/frontend-app-learning.git --depth 1
  git clone git@github.com:edx/frontend-app-payment.git --depth 1
  git clone git@github.com:edx/frontend-app-profile.git --depth 1
  git clone git@github.com:edx/frontend-app-publisher.git --depth 1
  git clone git@github.com:edx/frontend-app-support-tools.git --depth 1
  git clone git@github.com:edx/frontend-component-cookie-policy-banner.git --depth 1
  git clone git@github.com:edx/frontend-component-footer.git --depth 1
  git clone git@github.com:edx/frontend-component-header-edx.git --depth 1
  git clone git@github.com:edx/frontend-component-header.git --depth 1
  git clone git@github.com:edx/frontend-component-site-header.git --depth 1
  git clone git@github.com:edx/frontend-platform.git --depth 1
  git clone git@github.com:edx/frontend-template-application.git --depth 1
  git clone git@github.com:edx/prospectus.git --depth 1
  git clone git@github.com:edx/studio-frontend.git --depth 1
)
