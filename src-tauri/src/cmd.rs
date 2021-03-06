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

// #[derive(Debug, Serialize, Deserialize)]
// pub struct VincipherBody {
//     vinNum: String,
//     submitBtn: String,
// }

// #[tauri::command]
// pub async fn vin_cipher() -> Result<(), Box<dyn Error>> {
//     let mut h = header::HeaderMap::new();
//     h.insert("Accept", header::HeaderValue::from_static("text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"));
//     h.insert("accept-language", header::HeaderValue::from_static("text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"));
//     h.insert("cache-control", header::HeaderValue::from_static("text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"));
//     h.insert("content-type", header::HeaderValue::from_static("text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"));
//     h.insert("sec-ch-ua", header::HeaderValue::from_static("text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"));
//     h.insert("sec-ch-ua-mobile", header::HeaderValue::from_static("text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"));
//     h.insert("sec-ch-ua", header::HeaderValue::from_static("text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"));
//     h.insert("sec-ch-ua-platform", header::HeaderValue::from_static("text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"));
//     h.insert("Referer", header::HeaderValue::from_static("text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"));
    
//     let client = reqwest::Client::builder()
//         .default_headers(h)
//         .build()?;

//     let requestBody = VincipherBody {
//         vinNum: "JALC4W165B7003640".into(),
//         submitBtn: "Get+VIN+Data".into()
//     };

//     let data = serde_urlencoded::to_string(&requestBody).expect("serialize issue");

//     let doge = client
//         .post("https://vindecipher.com/omnivin/index.cfm?action=decode")
//         .send()
//         .await?
//         .text()
//         .await?;
//     println!("{:}", doge);
//     Ok(())

// }