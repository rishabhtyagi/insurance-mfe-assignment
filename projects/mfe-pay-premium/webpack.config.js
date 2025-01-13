const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  
  name: 'mfe-pay-premium',

  exposes: {
    './PayPremiumModule': './projects/mfe-pay-premium/src/app/pay-premium/pay-premium.module.ts',
  },
  remotes: {
    "mfe-insurance-details": "http://localhost:4300/remoteEntry.js"
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
