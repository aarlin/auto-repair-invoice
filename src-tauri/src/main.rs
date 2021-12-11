#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

extern crate vin;

#[derive(serde::Serialize)]
struct CustomResponse {
  vin: String,
  country: String,
  manufacturer: String,
  region: String
}

use tauri::Manager;
// Create the command:
#[tauri::command]
fn close_splashscreen(window: tauri::Window) {
  // Close splashscreen
  if let Some(splashscreen) = window.get_window("splashscreen") {
    splashscreen.close().unwrap();
  }
  // Show main window
  window.get_window("main").unwrap().show().unwrap();
}

#[tauri::command]
fn my_custom_command(invoke_message: String) -> Result<CustomResponse, String> {
  println!("I was invoked from JS, with this message: {}", invoke_message);
  let result: bool = vin::check_validity(&invoke_message).is_ok();
  println!("{:?}", result);
  if result {
    let unwrap = vin::get_info(&invoke_message).unwrap();
    println!("{:?}", unwrap);
    Ok(CustomResponse {
      vin: unwrap.vin,
      country: unwrap.country,
      manufacturer: unwrap.manufacturer,
      region: unwrap.region
    })
  } else {
    Err("No result".into())
  }
}

#[tauri::command]
fn cmd_a() -> String {
  "Command a".to_string()
}
#[tauri::command]
fn cmd_b() -> String {
  "Command b".to_string()
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![close_splashscreen, my_custom_command, cmd_a, cmd_b])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
