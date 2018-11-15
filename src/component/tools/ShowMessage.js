import toastr from "toastr";


export const ShowMessage = ({ header, message }) => {
   let type = '';
      switch(header) {
        case 'DONE':
          type='success';
          break;
        case 'INFO':
          type = 'info';
          break;
        case 'ERROR':
            type = "error";
          break;
        default:
          type = 'info';
          break;
      }

    toastr[type](message)

};
