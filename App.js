import * as React from 'react';
import {WebView} from 'react-native-webview';

export default function App() {
  return (
    <WebView
            source={{
            uri: 'https://www.fiap.com.br',
            }}
            style={{marginTop: 20}}
          />
  );
}
