const { getDefaultConfig } = require('expo/metro-config');
const { mergeConfig } = require('@react-native/metro-config');

const config = {
    resolver: {
        requireCycleIgnorePatterns: [
            /node_modules\/@firebase\/firestore\/.*/,
            /node_modules\/@grpc\/grpc-js\/.*/,
            /node_modules\/protobufjs\/.*/,
        ],
    },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
