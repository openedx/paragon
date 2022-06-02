---
title: 'Dropzone'
type: 'component'
components:
- Dropzone
categories:
- Forms
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
notes: 
---

The `Dropzone` allows users to upload files via drag and drop, or by clicking the component. Currently, only one file upload at a time is allowed.

Note that you have to pass an `axios` instance for the upload to work.

## Basic Usage
Drag and drop a file to begin uploading, only one file at a time is allowed, no other validation is done.

```jsx live
() => {
  const axiosInstance = axios.create({});

  return (
    <Dropzone
      uploadCallbacks={{
        onUploadProgress: (percent) => console.log(percent),
        onUploadError: () => console.log('UPLOAD ERROR'),
      }}
      axiosConfig={{
        uploadUrl: 'https://httpbin.org/post',
        client: axiosInstance,
      }}
    />
  )
}
```

## With Progress Bar
Display upload progress as a progress bar with the ability to cancel the upload.

```jsx live
() => {
  const axiosInstance = axios.create({});

  return (
    <Dropzone
      uploadCallbacks={{
        onUploadProgress: (percent) => console.log(percent),
        onUploadCancel: () => console.log('UPLOAD CANCEL'),
        onUploadError: () => console.log('UPLOAD ERROR'),
      }}
      progressVariant="bar"
      axiosConfig={{
        uploadUrl: 'https://httpbin.org/post',
        client: axiosInstance,
      }}
    />
  )
}
```

## With file size and type validation

Accepts only .png files with size between 1MB and 20MB. The file sizes are specified in bytes.
`accept` prop should be an object with the keys set to the [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) and the values to an array of file extensions.

```jsx live
() => {
  const axiosInstance = axios.create({});

  return (
    <Dropzone
      uploadCallbacks={{
        onUploadProgress: (percent) => console.log(percent),
        onUploadCancel: () => console.log('UPLOAD CANCEL'),
        onUploadError: () => console.log('UPLOAD ERROR'),
      }}
      progressVariant="bar"
      minSize={1048576}
      maxSize={20 * 1048576}
      accept={{
        "image/png": [],
      }}
      axiosConfig={{
        uploadUrl: 'https://httpbin.org/post',
        client: axiosInstance,
      }}
    />
  )
}
```

## With custom error messages

Accepts only .png files with size between 1MB and 20MB, renders custom validation error messages.

```jsx live
() => {
  const axiosInstance = axios.create({});

  return (
    <Dropzone
      uploadCallbacks={{
        onUploadProgress: (percent) => console.log(percent),
        onUploadCancel: () => console.log('UPLOAD CANCEL'),
        onUploadError: () => console.log('UPLOAD ERROR'),
      }}
      errorMessages={{
        invalidType: 'Ivalid file type, only images allowed.',
        invalidSize: 'The file size must be between 1MB and 20MB.',
        multipleDragged: 'Cannot upload more than one file.',
      }}
      progressVariant="bar"
      minSize={1048576}
      maxSize={20 * 1048576}
      accept={{
        "image/png": [],
      }}
      axiosConfig={{
        uploadUrl: 'https://httpbin.org/post',
        client: axiosInstance,
      }}
    />
  )
}
```

## With custom look

Use `inputComponent` prop to override default view of `Dropzone`.

```jsx live
() => {
  const axiosInstance = axios.create({});
	const MyInputComponent = <p>Hey! You can render here anythinng you want ;)</p>;

  return (
    <Dropzone
      uploadCallbacks={{
        onUploadProgress: (percent) => console.log(percent),
        onUploadError: () => console.log('UPLOAD ERROR'),
      }}
			inputComponent={MyInputComponent}
      axiosConfig={{
        uploadUrl: 'https://httpbin.org/post',
        client: axiosInstance,
      }}
    />
  )
}
```

## With custom validation

You can pass your own validator function which accepts `File` object as its only argument, the function is invoked after all other validation steps are done.
The function should return error message to display in case validation fails, otherwise return `null`.

This example validates that only `400x479` images can be uploaded. 

```jsx live
() => {
  // note that we do not need to validate that received file is actually an image
  // because 'accept' parameter handles that before validation function is used
  async function imageDimensionValidator(file) {
    const image = new Image();
    url = URL.createObjectURL(file);
    image.src = url;
    await image.decode();
    if (image.width !== 400 || image.height !== 479) {
      return 'The image must have 400x479 dimensions.';
    }
    return null;
  }
  
  const axiosInstance = axios.create({});
  
  return (
    <Dropzone
      uploadCallbacks={{
        onUploadProgress: (percent) => console.log(percent),
        onUploadCancel: () => console.log('UPLOAD CANCEL'),  
        onUploadError: () => console.log('UPLOAD ERROR'),
      }}
      progressVariant="bar"
      accept={{"image/*": []}}
      validator={imageDimensionValidator}
      axiosConfig={{
        uploadUrl: 'https://httpbin.org/post',
        client: axiosInstance,
      }}
    />
  );
}
```
