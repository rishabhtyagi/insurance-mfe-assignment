const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe-insurance-details',

  exposes: {
    './InsuranceDetailsModule': './projects/mfe-insurance-details/src/app/insurance-details/insurance-details.module.ts',
    './PolicyService': './projects/mfe-insurance-details/src/app/services/policy.service.ts', // Expose a service
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
