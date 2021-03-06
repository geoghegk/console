export const operatorsPO = {
  search: 'input[type="text"]',
  nav: {
    operators: '[data-quickstart-id="qs-nav-operators"]',
    operatorHub: 'a[href="/operatorhub"]',
    installedOperators: 'a[href$="/operators.coreos.com~v1alpha1~ClusterServiceVersion"]',
    link: 'li.pf-c-nav__item.pf-m-expandable',
    menuItems: '#page-sidebar ul li',
  },
  operatorHub: {
    numOfItems: 'div.co-catalog-page__num-items',
    install: '[data-test="install-operator"]',
    pipelinesOperatorCard: '[data-test^="openshift-pipelines-operator"]',
    serverlessOperatorCard: '[data-test^=serverless-operator]',
    virtualizationOperatorCard: '[data-test^="kubevirt-hyperconverged"]',
    knativeCamelOperatorCard: '[data-test^="red-hat-camel-k"]',
    installingOperatorModal: '#operator-install-page',
    gitOpsOperatorCard: '[data-test^="openshift-gitops-operator"]',
  },
  subscription: {
    logo: 'h1.co-clusterserviceversion-logo__name__clusterserviceversion',
  },
  installOperators: {
    title: 'h1.co-m-pane__heading',
    operatorsNameRow: 'div[aria-label="Installed Operators"] td:nth-child(1) h1',
    noOperatorsFound: '[data-test="msg-box-title"]',
    search: 'input[data-test-id="item-filter"]',
    noOperatorFoundMessage: 'div.cos-status-box__title',
    knativeServingLink: '[title="knativeservings.operator.knative.dev"]',
    knativeEventingLink: '[title="knativeeventings.operator.knative.dev"]',
  },
  sidePane: {
    install: '[data-test-id="operator-install-btn"]',
    uninstall: '[data-test-id="operator-uninstall-btn"]',
  },
  alertDialog: '[role="dialog"]',
  uninstallPopup: {
    uninstall: '#confirm-action',
  },
};
