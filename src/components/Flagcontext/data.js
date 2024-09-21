const data = {
  github: true,
  imageslider: false,
  star: true,
  Tictac: true,
  modal: false,
};

export default function featureflag() {
  return new Promise((resolve, reject) => {
    if (data) setTimeout(resolve(data), 500);
    else reject("some eror occured");
  });
}
