
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export const ImageGallery = ({ images }) => {
  return (
    <ImageList sx={{ width: '100%', height: 500 }} cols={1} rowHeight={200}>

      <ImageListItem >
        <img
          src={`${images}?w=164&h=164&fit=crop&auto=format`}
          srcSet={`${images}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          alt={'Imagen de la nota'}
          loading="lazy"
        />
      </ImageListItem>

    </ImageList>
  );
}
