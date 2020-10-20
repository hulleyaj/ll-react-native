import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          Struxtion: {
            screens: {
              StruxtionScreen: 'struxtion',
            },
          },
          Native: {
            screens: {
              NativeScreen: 'native',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
