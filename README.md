# expoによるreact-nativeの設定

## expoの設定
- `https://expo.io/`公式サイトはこちらそれほど最初の設定面倒ではない
- macにアプリインストール
- `exp init my-new-project`
- `cd my-new-project`(作成したプロジェクトに移動)
- `exp start`
- 補足：マシンのスペックによるが最初のビルドがめっちゃ時間かかる場合あり、andoroidの場合はsdkも含めて（アンドロイドスタジオ）設定いる
- iosに関してはとくに面倒はなしかなって感じ

## atomの設定
- `https://github.com/94cstyles/atom-react-native-autocomplete`を入れておくと便利かも
- `atom-react-native-style`も入れておくとよきかなと
- スニペットの登録でコンポーネント単位で展開しやすいようにしておくとめちゃくちゃらく
```html
# Your snippets
#
# Atom snippets allow you to enter a simple prefix in the editor and hit tab to
# expand the prefix into a larger code block with templated values.
#
# You can create a new snippet in this file by typing "snip" and then hitting
# tab.
#
# An example CoffeeScript snippet to expand log to console.log:
#
# '.source.coffee':
#   'Console log':
#     'prefix': 'log'
#     'body': 'console.log $1'
#
# Each scope (e.g. '.source.coffee' above) can only be declared once.
#
# This file uses CoffeeScript Object Notation (CSON).
# If you are unfamiliar with CSON, you can read more about it in the
# Atom Flight Manual:
# http://flight-manual.atom.io/using-atom/sections/basic-customization/#_cson
'.source.js':
  'React Native Component File':
    'prefix': 'rnc'
    'body': '''/* @flow */

      import React, { Component } from 'react';
      import {
        View,
        Text,
        StyleSheet,
      } from 'react-native';

      export default class ${1:MyComponent} extends Component {
        render() {
          return (
            ${2:<View style={styles.container\\}>
              ${3:<Text>Writehere</Text>}
            </View>}
          );$5
        }
      }

      const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
      });
      '''
  'React Native Pure Component File':
    'prefix': 'rnp'
    'body': '''/* @flow weak */

      import React from 'react';
      import {
        View,
        Text,
        StyleSheet,
      } from 'react-native';

      const ${1:MyComponent} = ({$2}) => (
        ${3:<View style={styles.container\\}>
          ${4:<Text>${5:I'm ${1:MyComponent}}</Text>}
        </View>}
      );$6

      export default ${1:MyComponent};

      const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
      });
      '''

//展開は[rnc+tabキー]
```

## React-nativeのスタイルのルールのおさらい
- 普通のwebの話だとコンポーネント単位で考えてないので、複数のsassやらで管理するが、nativeの場合はコンポーネント単位なので、スタイルもコンポーネント単位で行うのが一般的


## Componentのおさらい
- expoで行なっても`create-react-native-app`の時と何もかわらない（expoで作るほうが余計なものがはいってないが、、、）

- project/components/component名
```js
/* rnc+tabキー展開 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

// コンポーネント名に変更
export default class Superman extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I am Superman</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


app.jsで読み込み

// importする
import Superman from './components/Superman';

export default class App extends React.ComponXent {
  render() {
    return (
      <View style={styles.container}>
        <Text>I am a Component</Text>
        //ここでコンポーネント読み込み
        <Superman />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //これで上から見えるようにしている
    marginTop: 50,
  },
});


```

## FlexBoxのおさらい
- ネイティブの場合ちょっと挙動違う
- `alignItems: 'center',` 横軸
- `justifyContent: 'center',`　縦軸
- この辺ウェブに慣れていると注意かも！
- 軸の方向性だけ違うのでそれ以外のcss命令は変わらん印象


## ScrollViewについて
```js
//app.jsに読み込み
import Horizontal from './components/Horizontal';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      //今回はこれをscroolviewコンポーネントで作る
        <Horizontal />
      </View>
    );
  }
}
```
- components/Horizontal.jsを作成
```js
//rnc + tabキーで展開

/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  //まずインポートでscrollviewを使えるようにする
  ScrollView,
  StyleSheet,
} from 'react-native';

export default class Horizontal extends Component {
  render() {
    return (
      //ScrollViewでラップして、その中にViewでラップ
      <ScrollView style={styles.container}>
        <View style={styles.outer}>
          <Text style={styles.innerText}>Welcome to with app</Text>
        </View>
      </ScrollView>
    );
  }
}

//スタイルを使うときはstyles.xxxで作成して下に追記
const styles = StyleSheet.create({
  container: {

  },
  outer: {

  },
  innerText{

  },
});
//これがまず雛形
```
