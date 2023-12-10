import Constants from 'expo-constants';
import * as manifest from "../app.config.js"

export const Extra = (Constants.expoConfig?.extra || manifest?.extra || {});
