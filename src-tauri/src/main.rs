// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use std::process::Command;

use crate::utils::set_window_shadow;
mod utils;
use tauri::{command, WindowBuilder};
use window_shadows::set_shadow;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
async fn create_window(
    app: tauri::AppHandle,
    title: String,
    link: String,
    decorations: Option<bool>,
) -> Result<(), String> {
    let window = WindowBuilder::new(&app, &title, tauri::WindowUrl::App(link.into()))
        .decorations(decorations.unwrap_or(true))
        .center()
        .resizable(true)
        .visible(false)
        .build()
        .map_err(|_| "failed to build window")?;
    set_shadow(&window, true).map_err(|_| "Unsupported platform!")?;
    Ok(())
}

#[tauri::command]
async fn start_rear_end(handle: tauri::AppHandle) {
    let start_path = handle
        .path_resolver()
        .resolve_resource("model/test3.py")
        .expect("failed to resolve resource")
        .to_string_lossy()
        .replace("\\\\?\\", "");
    let py_runtime = handle
        .path_resolver()
        .resolve_resource("model/envs/np/python.exe")
        .expect("failed to resolve resource")
        .to_string_lossy()
        .replace("\\\\?\\", "");
    println!("{:?}", start_path);
    println!("{:?}", py_runtime);
    //调用 py_Runtime 执行 Start_path
    let cmd = Command::new(py_runtime)
        .arg(start_path)
        .spawn()
        .expect("failed to start python");
    println!("{:?}", cmd);
}
#[tauri::command]
async fn close_rear_end(_handle: tauri::AppHandle) {
    let mut cmd = Command::new("taskkill");
    cmd.arg("/f");
    cmd.arg("/t");
    cmd.arg("/im");
    cmd.arg("python.exe");
    cmd.output().expect("failed to close python");
}
fn main() {
    tauri::Builder::default()
        .setup(|app| {
            set_window_shadow(app);
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            greet,
            create_window,
            start_rear_end,
            close_rear_end
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
