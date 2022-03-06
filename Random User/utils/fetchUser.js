const URL = "https://randomuser.me/api/";

const getUser = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  // destructure
  //   console.log(data);
  //   {results: Array(1), info: {…}}info: {seed: '6bff912bf59eabbe', results: 1, page: 1, version: '1.3'}results: Array(1)0: {gender: 'male', name: {…}, location: {…}, email: 'fatih.gonultas@example.com', login: {…}, …}length: 1[[Prototype]]: Array(0)[[Prototype]]: Object
  // to reach result navigate like this see api n u will know after this console.log how to access result object
  const person = data.results[0];
  const { phone, email } = person;
  //   picture": {
  //     "large": "https://randomuser.me/api/portraits/men/75.jpg",
  //     "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
  //     "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
  //   },
  const { large: image } = person.picture;
  //   "login": {
  // "uuid": "155e77ee-ba6d-486f-95ce-0e0c0fb4b919",
  // "username": "silverswan131",
  // "password": "firewall",
  const { password } = person.login;
  //   "name": {
  //         "title": "mr",
  //         "first": "brad",
  //         "last": "gibson"
  //       },
  const { first, last } = person.name;
  //   "dob": {
  //         "date": "1993-07-20T09:44:18.674Z",
  //         "age": 26
  //       },
  const {
    dob: { age },
  } = person;
  //   "location": {
  //         "street": "9278 new road",
  //         "city": "kilcoole",
  //         "state": "waterford",
  //         "postcode": "93027",
  //         "coordinates": {
  //           "latitude": "20.9267",
  //           "longitude": "-7.9310"
  //         },
  const {
    street: { number, name },
  } = person.location;

  //   return
  return {
    image,
    phone,
    email,
    password,
    age,
    street: `${number} ${name}`,
    name: `${first} ${last}`,
  };
};
export default getUser;
