function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const ImgUpload = ({
  onChange,
  src }) => /*#__PURE__*/

React.createElement("label", { htmlFor: "photo-upload", className: "custom-file-upload fas" }, /*#__PURE__*/
React.createElement("div", { className: "img-wrap img-upload" }, /*#__PURE__*/
React.createElement("img", { for: "photo-upload", src: src })), /*#__PURE__*/

React.createElement("input", { id: "photo-upload", type: "file", onChange: onChange }));



const Name = ({
  onChange,
  value }) => /*#__PURE__*/

React.createElement("div", { className: "field" }, /*#__PURE__*/
React.createElement("label", { htmlFor: "name" }, "name:"), /*#__PURE__*/


React.createElement("input", {
  id: "name",
  type: "text",
  onChange: onChange,
  maxlength: "25",
  value: value,
  placeholder: "Alexa",
  required: true }));



const Status = ({
  onChange,
  value }) => /*#__PURE__*/

React.createElement("div", { className: "field" }, /*#__PURE__*/
React.createElement("label", { htmlFor: "status" }, "status:"), /*#__PURE__*/


React.createElement("input", {
  id: "status",
  type: "text",
  onChange: onChange,
  maxLength: "35",
  value: value,
  placeholder: "It's a nice day!",
  required: true }));



const Profile = ({
  onSubmit,
  src,
  name,
  status }) => /*#__PURE__*/

React.createElement("div", { className: "card" }, /*#__PURE__*/
React.createElement("form", { onSubmit: onSubmit }, /*#__PURE__*/
React.createElement("h1", null, "Profile Card"), /*#__PURE__*/
React.createElement("label", { className: "custom-file-upload fas" }, /*#__PURE__*/
React.createElement("div", { className: "img-wrap" }, /*#__PURE__*/
React.createElement("img", { for: "photo-upload", src: src }))), /*#__PURE__*/


React.createElement("div", { className: "name" }, name), /*#__PURE__*/
React.createElement("div", { className: "status" }, status), /*#__PURE__*/
React.createElement("button", { type: "submit", className: "edit" }, "Edit Profile ")));




const Edit = ({
  onSubmit,
  children }) => /*#__PURE__*/

React.createElement("div", { className: "card" }, /*#__PURE__*/
React.createElement("form", { onSubmit: onSubmit }, /*#__PURE__*/
React.createElement("h1", null, "Profile Card"),
children, /*#__PURE__*/
React.createElement("button", { type: "submit", className: "save" }, "Save ")));



class CardProfile extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      file: '',
      imagePreviewUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
      name: '',
      status: '',
      active: 'edit' });_defineProperty(this, "photoUpload",


    e => {
      e.preventDefault();
      const reader = new FileReader();
      const file = e.target.files[0];
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result });

      };
      reader.readAsDataURL(file);
    });_defineProperty(this, "editName",
    e => {
      const name = e.target.value;
      this.setState({
        name });

    });_defineProperty(this, "editStatus",

    e => {
      const status = e.target.value;
      this.setState({
        status });

    });_defineProperty(this, "handleSubmit",

    e => {
      e.preventDefault();
      let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
      this.setState({
        active: activeP });

    });}

  render() {
    const { imagePreviewUrl,
      name,
      status,
      active } = this.state;
    return /*#__PURE__*/(
      React.createElement("div", null,
      active === 'edit' ? /*#__PURE__*/
      React.createElement(Edit, { onSubmit: this.handleSubmit }, /*#__PURE__*/
      React.createElement(ImgUpload, { onChange: this.photoUpload, src: imagePreviewUrl }), /*#__PURE__*/
      React.createElement(Name, { onChange: this.editName, value: name }), /*#__PURE__*/
      React.createElement(Status, { onChange: this.editStatus, value: status })) : /*#__PURE__*/


      React.createElement(Profile, {
        onSubmit: this.handleSubmit,
        src: imagePreviewUrl,
        name: name,
        status: status })));



  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(CardProfile, null),
document.getElementById('root'));