package com.unityrnapp;

import android.content.Context;
import android.widget.FrameLayout;

public class UnityView extends FrameLayout {
    public UnityView(Context context) {
        super(context);
        inflate(context, R.layout.layout_unity_view, this);
    }
}
