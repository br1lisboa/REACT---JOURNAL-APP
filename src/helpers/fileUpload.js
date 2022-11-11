

export const fileUpload = async (file) => {

    if (!file) throw new Error('No tenemos ningun archivo a subir')

    const cloudinaryURL = 'https://api.cloudinary.com/v1_1/dcca4cdx5/upload'

    const formData = new FormData()
    formData.append('upload_preset', 'react-journal')
    formData.append('file', file)

    try {

        const resp = await fetch(cloudinaryURL, {
            method: 'POST',
            body: formData
        })
        console.log(resp)

        if (!resp.ok) throw new Error('No se pudo subir imagen')

        const cloudinaryResp = await resp.json()
        console.log(cloudinaryResp)

        return cloudinaryResp

    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }

}