package com.yourprojectname;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;

// 追加: このimport文が必要
import android.os.Bundle; // For Bundle!
import com.facebook.react.ReactRootView; // For ReactRootView!
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView; // For RNGestureHandlerEnabledRootView!

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "YourProjectName";
  }

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flag.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you use the New Architecture, you might uncomment this line and remove the one below
        DefaultNewArchitectureEntryPoint.get</li>fabricEnabled());
  }

  // 追加: onCreateメソッド内でreact-native-screensの初期化
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null); // ここを savedInstanceState から null に変更する場合があります
    // react-native-screens を有効化
    // この行を super.onCreate(null) の後に置く
    // もし以下のようなエラーが出る場合は、不要な場合があります。
    // No static method enableScreens(Z)V in class Lcom/swmansion/rnscreens/ScreenContainer
    // その場合はこの行を削除してください。
    // import が足りない場合は android.os.Bundle, com.facebook.react.ReactRootView, com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView も追加
    // https://github.com/software-mansion/react-native-screens#android
    // https://docs.swmansion.com/react-native-screens/docs/installation/#android

    // 以下の行を追加します
    // https://reactnavigation.org/docs/getting-started/#installing-dependencies-into-a-bare-react-native-project
    // ほとんどのケースで自動的に行われるため、手動で追加する必要はないかもしれません。
    // https://reactnavigation.org/docs/getting-started/#react-native-gesture-handler-configuration
  }

  // もし react-native-gesture-handler を使用していて問題がある場合、以下が必要になることがあります
  // これは react-native-screens ではなく react-native-gesture-handler の設定です。
  @Override
  protected ReactRootView createRootView() {
    return new RNGestureHandlerEnabledRootView(MainActivity.this);
  }
}