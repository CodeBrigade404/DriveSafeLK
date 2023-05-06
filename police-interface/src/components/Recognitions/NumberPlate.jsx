import { useState } from "react";
import "./NumberPlate.css";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Typography from "@mui/material/Typography";

export default function Uploader() {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");
  return (
    <div>
      <Typography
        variant='h5'
        component='h2'
        fontWeight='bold'
        fontFamily='Roboto'
        sx={{ mt: 6, textAlign: "center" }}>
        VEHICLE NUMBER PALATE RECOGNITION SERVICE
      </Typography>
      <Typography color='text.secondary' paragraph sx={{ m :5,mr: 15  ,ml:15}}>
        The number plate recognition feature of driveSafe uses image processing algorithms to
        identify and extract the text present on the number plate of the uploaded image. This
        feature leverages machine learning techniques to accurately recognize and decode the
        alphanumeric characters present on the number plate. Once the number plate is identified, it
        can be used to retrieve important information such as the vehicle registration number, owner
        details, and more. This feature enhances the functionality of your application and enables
        users to easily identify and track vehicles, improving overall safety on the road.
      </Typography>
      <div className='recognition-container'>
        <section className='recognition-divider'>
          <form
            className='upload-form'
            onClick={() => document.querySelector(".input-field").click()}>
            <input
              type='file'
              accept='image/*'
              className='input-field'
              hidden
              onChange={({ target: { files } }) => {
                files[0] && setFileName(files[0].name);
                if (files) {
                  setImage(URL.createObjectURL(files[0]));
                }
              }}
            />

            {image ? (
              <img src={image} width={280} height={280} alt={fileName} />
            ) : (
              <>
                <MdCloudUpload color='#1475cf' size={150} />
                <p>Browse Files to upload</p>
              </>
            )}
          </form>

          <section className='uploaded-row'>
            <span className='upload-content'>
              {fileName} <span className='file-size'>(0.5mb)</span> -
              <MdDelete
                onClick={() => {
                  setFileName("No selected File");
                  setImage(null);
                }}
              />
            </span>
          </section>
        </section>
        <section>
          <ImageList sx={{ width: 700, height: 550 }}>
            <ImageListItem key='Subheader' cols={2}>
              <ListSubheader component='div'>Pending Recognitions Vehicles</ListSubheader>
            </ImageListItem>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading='lazy'
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={item.author}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item.title}`}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </section>
      </div>
    </div>
  );
}

const itemData = [
  {
    img: "https://images.pexels.com/photos/14242295/pexels-photo-14242295.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Y K Z 152",
    author: "Citizen ID : 299712256789",
  },
  {
    img: "https://images.pexels.com/photos/14209233/pexels-photo-14209233.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "MS07 B A T",
    author: "Citizen ID : 19971234569",
  },
  {
    img: "https://images.pexels.com/photos/4397177/pexels-photo-4397177.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "MS07 B A T",
    author: "@helloimnik",
  },
  {
    img: "https://images.pexels.com/photos/2521559/pexels-photo-2521559.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "MS07 B A T",
    author: "@nolanissac",
  },
  {
    img: "https://images.pexels.com/photos/2393854/pexels-photo-2393854.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "MS07 B A T",
    author: "@hjrc33",
  },
  {
    img: "https://images.pexels.com/photos/14209233/pexels-photo-14209233.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "MS07 B A T",
    author: "@arwinneil",
  },
  {
    img: "https://images.pexels.com/photos/2998992/pexels-photo-2998992.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "MS07 B A T",
    author: "@tjdragotta",
  },
  {
    img: "https://images.pexels.com/photos/1410033/pexels-photo-1410033.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "MS07 B A T",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.pexels.com/photos/5543131/pexels-photo-5543131.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "MS07 B A T",
    author: "@silverdalex",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.pexels.com/photos/8977648/pexels-photo-8977648.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.pexels.com/photos/12552045/pexels-photo-12552045.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.pexels.com/photos/12552048/pexels-photo-12552048.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Bike",
    author: "@southside_customs",
    cols: 2,
  },
];
