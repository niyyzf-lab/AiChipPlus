use tauri::{Manager, Runtime};
use window_shadows::set_shadow;
 
pub fn set_window_shadow<R: Runtime>(app: &tauri::App<R>) {
  let login_window = app.get_window("login").unwrap();
  set_shadow(&login_window, true).expect("Unsupported platform!");
}


