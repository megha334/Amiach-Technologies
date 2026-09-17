import os
from PIL import Image, ImageFilter, ImageDraw
from rembg import remove, new_session

user_upload_dir = r"C:\Users\ASUS\.gemini\antigravity-ide\brain\47fd187c-abfa-4e0c-be0a-ab067bc4e7b9\.user_uploaded"
brain_dir = r"C:\Users\ASUS\.gemini\antigravity-ide\brain\47fd187c-abfa-4e0c-be0a-ab067bc4e7b9"
public_images_dir = os.path.join(os.path.dirname(__file__), "public", "images")
os.makedirs(public_images_dir, exist_ok=True)

# 5 User images in chronological order
user_images = [
    ("media_1789577544154.png", "product-podium", (255, 43, 53)),       # Red accent for podium
    ("media_1789577563404.png", "product-kiosk", (245, 158, 11)),       # Amber/Gold accent for order kiosk
    ("media_1789577586503.png", "product-signage", (0, 163, 255)),      # Cyan/Sapphire for slim signage
    ("media_1789577602558.jpg", "product-wayfinding", (16, 185, 129)),  # Emerald/Mint for architectural mall wayfinding
    ("media_1789577616639.jpg", "product-console", (139, 92, 246))      # Purple/Indigo for lobby console
]

print("Initializing rembg with u2netp...")
session = new_session("u2netp")

for filename, base_name, accent_rgb in user_images:
    src_path = os.path.join(user_upload_dir, filename)
    if not os.path.exists(src_path):
        print(f"Source file not found: {src_path}")
        continue
    
    print(f"Removing background from {filename} -> {base_name}...")
    orig_img = Image.open(src_path).convert("RGBA")
    
    # 1. High precision background removal
    cutout_img = remove(orig_img, session=session)
    
    # Crop transparent bounding box
    bbox = cutout_img.getbbox()
    if bbox:
        cutout_img = cutout_img.crop(bbox)
        
    # Save clean transparent PNG
    cutout_path = os.path.join(public_images_dir, f"{base_name}-cutout.png")
    cutout_img.save(cutout_path, format="PNG")
    print(f"Saved transparent cutout to: {cutout_path}")
    
    # 2. Composite onto an ultra-premium dark luxury studio canvas (1920x1080)
    canvas_w, canvas_h = 1920, 1080
    studio_bg = Image.new("RGBA", (canvas_w, canvas_h), (8, 9, 11, 255))
    
    cx, cy = int(canvas_w * 0.65), int(canvas_h * 0.5)
    r_acc, g_acc, b_acc = accent_rgb
    
    draw = ImageDraw.Draw(studio_bg)
    
    # Floor horizon
    horizon_y = int(canvas_h * 0.72)
    for y in range(horizon_y, canvas_h):
        ratio = (y - horizon_y) / (canvas_h - horizon_y)
        alpha = int(12 + ratio * 20)
        draw.line([(0, y), (canvas_w, y)], fill=(16, 18, 24, 255))
    
    # Soft ambient glow spotlight behind product
    spotlight = Image.new("RGBA", (canvas_w, canvas_h), (0, 0, 0, 0))
    sp_draw = ImageDraw.Draw(spotlight)
    sp_draw.ellipse([cx - 450, cy - 400, cx + 450, cy + 400], fill=(r_acc, g_acc, b_acc, 35))
    sp_draw.ellipse([cx - 260, cy - 220, cx + 260, cy + 220], fill=(r_acc, g_acc, b_acc, 55))
    spotlight = spotlight.filter(ImageFilter.GaussianBlur(120))
    studio_bg = Image.alpha_composite(studio_bg, spotlight)
    
    # Target height roughly 840px
    target_h = 840
    aspect = cutout_img.width / cutout_img.height
    target_w = int(target_h * aspect)
    
    if target_w > 800:
        target_w = 800
        target_h = int(target_w / aspect)
        
    resized_cutout = cutout_img.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    # Floor soft shadow
    shadow_w = int(target_w * 0.85)
    shadow_h = 45
    shadow = Image.new("RGBA", (shadow_w, shadow_h), (0, 0, 0, 0))
    sh_draw = ImageDraw.Draw(shadow)
    sh_draw.ellipse([0, 0, shadow_w, shadow_h], fill=(0, 0, 0, 200))
    sh_draw.ellipse([int(shadow_w*0.1), 5, int(shadow_w*0.9), shadow_h - 5], fill=(r_acc, g_acc, b_acc, 70))
    shadow = shadow.filter(ImageFilter.GaussianBlur(18))
    
    product_x = int(canvas_w * 0.65 - target_w / 2)
    product_y = int(canvas_h * 0.5 - target_h / 2) + 20
    
    # Paste floor shadow
    studio_bg.paste(shadow, (product_x + int((target_w - shadow_w)/2), product_y + target_h - 25), shadow)
    
    # Paste product
    studio_bg.paste(resized_cutout, (product_x, product_y), resized_cutout)
    
    # Save final composited hero image
    final_jpg_path = os.path.join(public_images_dir, f"{base_name}.jpg")
    studio_bg.convert("RGB").save(final_jpg_path, format="JPEG", quality=95)
    print(f"Saved composited hero slide to: {final_jpg_path}")

print("All 5 products background removed & studio renders generated successfully!")
