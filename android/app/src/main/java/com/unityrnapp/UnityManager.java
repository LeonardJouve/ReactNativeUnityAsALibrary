package com.unityrnapp;

import androidx.annotation.NonNull;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

public class UnityManager extends SimpleViewManager<UnityView> {
    @NonNull
    @Override
    public String getName() {
        return "UnityView";
    }

    @NonNull
    @Override
    protected UnityView createViewInstance(@NonNull ThemedReactContext themedReactContext) {
        return new UnityView(themedReactContext);
    }
}
