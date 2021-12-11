use reqwest;
use reqwest::header;
use std::error::Error;
use tauri::Manager;
extern crate vin;

#[derive(serde::Serialize)]
pub struct CustomResponse {
  vin: String,
  country: String,
  manufacturer: String,
  region: String
}

// Create the command:
#[tauri::command]
pub fn close_splashscreen(window: tauri::Window) {
  // Close splashscreen
  if let Some(splashscreen) = window.get_window("splashscreen") {
    splashscreen.close().unwrap();
  }
  // Show main window
  window.get_window("main").unwrap().show().unwrap();
}

#[tauri::command]
pub fn my_custom_command(invoke_message: String) -> Result<CustomResponse, String> {
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
pub fn cmd_a() -> String {
  "Command a".to_string()
}

#[tauri::command]
pub fn cmd_b() -> String {
  "Command b".to_string()
}

#[tauri::command]
pub async fn doge_coin() -> Result<(), Box<dyn Error>> {
    let mut h = header::HeaderMap::new();
    h.insert("Accept", header::HeaderValue::from_static("application/json"));
    
    let client = reqwest::Client::builder()
        .default_headers(h)
        .build()?;

    let doge = client
        .get("https://api.coinstats.app/public/v1/coins/dogecoin")
        .send()
        .await?
        .text()
        .await?;
    println!("{:}", doge);
    Ok(())
}