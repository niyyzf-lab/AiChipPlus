// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use crate::utils::set_window_shadow;
mod utils;
use tauri::WindowBuilder;
use window_shadows::set_shadow;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
async fn create_window(app: tauri::AppHandle, title: String, link: String,decorations:Option<bool>) -> Result<(), String> {
    let window = WindowBuilder::new(
        &app,
        &title,
        tauri::WindowUrl::App(link.into())
        
    )
    .decorations(decorations.unwrap_or(true))
    .center()
    .build().map_err(|_| "failed to build window")?;
    set_shadow(&window, true).map_err(|_| "Unsupported platform!")?;
    Ok(())
}

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            set_window_shadow(app);
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![greet,create_window])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
