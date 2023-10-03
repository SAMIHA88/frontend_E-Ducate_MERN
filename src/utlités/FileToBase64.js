async function FileToBase64(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    const data = await new Promise((resolve, reject) => {
        reader.onload = () => resolve(reader.result);
        reader.onerror = (err) => reject(err);
    });

    return data;
}

export { FileToBase64 };