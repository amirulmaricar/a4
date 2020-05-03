import React, {Component} from "react";

class FloorplanView extends Component {
  constructor(props){
    super(props);
    this.state={};
  }

  toggleColor(e) {
    if(this.props.isClicked[e] == true){
      return this.props.avgTemp[e];
    } else {
      return "#c0c5ce";
    }
  }

  render() {
    return (
      <svg width="571" height="438" viewBox="0 0 571 438" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Group 4">
      <g id="Outlines">
      <path id="Line 1" d="M1 10.5H235" stroke="black" strokeWidth="3"/>
      <path id="Line 2" d="M235.499 9L235.499 83.5" stroke="black" strokeWidth="3"/>
      <path id="Line 3" d="M234 84H571" stroke="black" strokeWidth="3"/>
      <path id="Line 4" d="M9.5 287L9.49997 429.5" stroke="black" strokeWidth="3"/>
      <path id="Line 5" d="M104 289L104 427" stroke="black" strokeWidth="3"/>
      <path id="Line 7" d="M292 287L292 425" stroke="black" strokeWidth="3"/>
      <path id="Line 9" d="M480 289L480 427" stroke="black" strokeWidth="3"/>
      <path id="Line 8" d="M386 289L386 427" stroke="black" strokeWidth="3"/>
      <path id="Line 6" d="M198 289L198 427" stroke="black" strokeWidth="3"/>
      <path id="Line 10" d="M9.5 428H563.5" stroke="black" strokeWidth="3"/>
      <rect id="Rectangle 8" x="1.5" y="1.5" width="568" height="435" stroke="black" strokeWidth="3"/>
      <path id="Line 11" d="M570.5 224.5L424 224.5L424 228C416.833 228.5 402.2 229.2 401 228C399 223.5 396.833 226.5 396.5 227L396.5 233.5L570.5 233.5" stroke="black"/>
      <path id="Line 12" d="M570 88.5L526 88.5L526 97.5L570 97.5" stroke="black"/>
      <path id="Line 13" d="M424 88.5L468 88.5L468 97.5L424 97.5L424 88.5Z" stroke="black"/>
      <path id="Line 14" d="M331.5 107L331.5 151L322.5 151L322.5 107L331.5 107Z" stroke="black"/>
      <line id="Line 15" x1="323.5" y1="107" x2="323.5" y2="90" stroke="black"/>
      <line id="Line 16" x1="323" y1="89.5" x2="369" y2="89.5" stroke="black"/>
      <line id="Line 17" x1="368.5" y1="90" x2="368.5" y2="94" stroke="black"/>
      <line id="Line 18" x1="369" y1="94.5" x2="327" y2="94.5" stroke="black"/>
      <line id="Line 19" x1="327.5" y1="94" x2="327.5" y2="107" stroke="black"/>
      <path id="Line 20" d="M323.5 151.5L323.5 184.5L333 184.5C341.896 184.736 334.5 179.5 333 179.5" stroke="black"/>
      <path id="Line 22" d="M327.5 151L327.5 179.5" stroke="black"/>
      <line id="Line 23" x1="333" y1="179.5" x2="327" y2="179.5" stroke="black"/>
      <path id="Line 24" d="M407 94V96L406 97H403L402.5 96.5V89.5" stroke="black"/>
      <path id="Line 25" d="M406.5 93.5H423.5" stroke="black"/>
      <path id="Line 26" d="M402 89.5H423.5" stroke="black"/>
      <rect id="Rectangle 9" x="82.5" y="222.5" width="38" height="11" stroke="black"/>
      <path id="Rectangle 10" d="M195.5 222.5H235.5V228V233.5H195.5V222.5Z" stroke="black"/>
      <path id="Line 27" d="M121 233H137.5V229H128H121" stroke="black"/>
      <path id="Line 28" d="M195.5 233H179V229H188.5H195.5" stroke="black"/>
      <path id="Line 29" d="M120.5 224L120.5 191" stroke="black"/>
      <path id="Line 30" d="M121 191.5L229.5 191.5" stroke="black"/>
      <path id="Line 31" d="M229 192L229 222" stroke="black"/>
      <path id="Line 32" d="M32.5 229V191.5" stroke="black"/>
      <line id="Line 33" x1="32" y1="191.5" x2="117" y2="191.5" stroke="black"/>
      <path id="Line 34" d="M117.5 191V222.5" stroke="black"/>
      </g>
      <g id="Room 1">
      <rect id="Rectangle 2" x="16" y="289" width="82" height="136" fill={this.toggleColor(1)} onClick={() => this.props.handleClick(1)}/>
      <path id="Room 1_2" d="M38.8057 358.974H36.4678V363H35.1484V353.047H38.4434C39.5645 353.047 40.4258 353.302 41.0273 353.812C41.6335 354.323 41.9365 355.066 41.9365 356.041C41.9365 356.661 41.7679 357.201 41.4307 357.661C41.098 358.121 40.6331 358.465 40.0361 358.693L42.374 362.918V363H40.9658L38.8057 358.974ZM36.4678 357.9H38.4844C39.1361 357.9 39.6533 357.732 40.0361 357.395C40.4235 357.057 40.6172 356.606 40.6172 356.041C40.6172 355.426 40.4326 354.954 40.0635 354.626C39.6989 354.298 39.1702 354.132 38.4775 354.127H36.4678V357.9ZM43.249 359.233C43.249 358.509 43.3903 357.857 43.6729 357.278C43.96 356.7 44.3564 356.253 44.8623 355.938C45.3727 355.624 45.9538 355.467 46.6055 355.467C47.6126 355.467 48.4261 355.815 49.0459 356.513C49.6702 357.21 49.9824 358.137 49.9824 359.295V359.384C49.9824 360.104 49.8434 360.751 49.5654 361.325C49.292 361.895 48.8978 362.339 48.3828 362.658C47.8724 362.977 47.2845 363.137 46.6191 363.137C45.6165 363.137 44.8031 362.788 44.1787 362.091C43.5589 361.394 43.249 360.471 43.249 359.322V359.233ZM44.5205 359.384C44.5205 360.204 44.7096 360.863 45.0879 361.359C45.4707 361.856 45.9811 362.104 46.6191 362.104C47.2617 362.104 47.7721 361.854 48.1504 361.353C48.5286 360.847 48.7178 360.14 48.7178 359.233C48.7178 358.422 48.5241 357.766 48.1367 357.265C47.7539 356.759 47.2435 356.506 46.6055 356.506C45.9811 356.506 45.4775 356.754 45.0947 357.251C44.7119 357.748 44.5205 358.459 44.5205 359.384ZM51.2334 359.233C51.2334 358.509 51.3747 357.857 51.6572 357.278C51.9443 356.7 52.3408 356.253 52.8467 355.938C53.3571 355.624 53.9382 355.467 54.5898 355.467C55.597 355.467 56.4105 355.815 57.0303 356.513C57.6546 357.21 57.9668 358.137 57.9668 359.295V359.384C57.9668 360.104 57.8278 360.751 57.5498 361.325C57.2764 361.895 56.8822 362.339 56.3672 362.658C55.8568 362.977 55.2689 363.137 54.6035 363.137C53.6009 363.137 52.7874 362.788 52.1631 362.091C51.5433 361.394 51.2334 360.471 51.2334 359.322V359.233ZM52.5049 359.384C52.5049 360.204 52.694 360.863 53.0723 361.359C53.4551 361.856 53.9655 362.104 54.6035 362.104C55.2461 362.104 55.7565 361.854 56.1348 361.353C56.513 360.847 56.7021 360.14 56.7021 359.233C56.7021 358.422 56.5085 357.766 56.1211 357.265C55.7383 356.759 55.2279 356.506 54.5898 356.506C53.9655 356.506 53.4619 356.754 53.0791 357.251C52.6963 357.748 52.5049 358.459 52.5049 359.384ZM60.7422 355.604L60.7764 356.424C61.3187 355.786 62.0501 355.467 62.9707 355.467C64.0052 355.467 64.7093 355.863 65.083 356.656C65.3291 356.301 65.6481 356.014 66.04 355.795C66.4365 355.576 66.9036 355.467 67.4414 355.467C69.0638 355.467 69.8887 356.326 69.916 358.044V363H68.6514V358.119C68.6514 357.59 68.5306 357.196 68.2891 356.937C68.0475 356.672 67.6419 356.54 67.0723 356.54C66.6029 356.54 66.2132 356.681 65.9033 356.964C65.5934 357.242 65.4134 357.618 65.3633 358.092V363H64.0918V358.153C64.0918 357.078 63.5654 356.54 62.5127 356.54C61.6833 356.54 61.1159 356.893 60.8105 357.6V363H59.5459V355.604H60.7422ZM79.3291 363H78.0576V354.571L75.5078 355.508V354.359L79.1309 352.999H79.3291V363Z" fill="black"/>
      </g>
      <g id="Room 0">
      <path id="Rectangle 1" d="M16 25H227V180H16V25Z" fill={this.toggleColor(0)} onClick={() => this.props.handleClick(0)}/>
      <path id="Room 0_2" d="M98.8057 105.974H96.4678V110H95.1484V100.047H98.4434C99.5645 100.047 100.426 100.302 101.027 100.812C101.633 101.323 101.937 102.066 101.937 103.041C101.937 103.661 101.768 104.201 101.431 104.661C101.098 105.121 100.633 105.465 100.036 105.693L102.374 109.918V110H100.966L98.8057 105.974ZM96.4678 104.9H98.4844C99.1361 104.9 99.6533 104.732 100.036 104.395C100.424 104.057 100.617 103.606 100.617 103.041C100.617 102.426 100.433 101.954 100.063 101.626C99.6989 101.298 99.1702 101.132 98.4775 101.127H96.4678V104.9ZM103.249 106.233C103.249 105.509 103.39 104.857 103.673 104.278C103.96 103.7 104.356 103.253 104.862 102.938C105.373 102.624 105.954 102.467 106.605 102.467C107.613 102.467 108.426 102.815 109.046 103.513C109.67 104.21 109.982 105.137 109.982 106.295V106.384C109.982 107.104 109.843 107.751 109.565 108.325C109.292 108.895 108.898 109.339 108.383 109.658C107.872 109.977 107.285 110.137 106.619 110.137C105.617 110.137 104.803 109.788 104.179 109.091C103.559 108.394 103.249 107.471 103.249 106.322V106.233ZM104.521 106.384C104.521 107.204 104.71 107.863 105.088 108.359C105.471 108.856 105.981 109.104 106.619 109.104C107.262 109.104 107.772 108.854 108.15 108.353C108.529 107.847 108.718 107.14 108.718 106.233C108.718 105.422 108.524 104.766 108.137 104.265C107.754 103.759 107.243 103.506 106.605 103.506C105.981 103.506 105.478 103.754 105.095 104.251C104.712 104.748 104.521 105.459 104.521 106.384ZM111.233 106.233C111.233 105.509 111.375 104.857 111.657 104.278C111.944 103.7 112.341 103.253 112.847 102.938C113.357 102.624 113.938 102.467 114.59 102.467C115.597 102.467 116.41 102.815 117.03 103.513C117.655 104.21 117.967 105.137 117.967 106.295V106.384C117.967 107.104 117.828 107.751 117.55 108.325C117.276 108.895 116.882 109.339 116.367 109.658C115.857 109.977 115.269 110.137 114.604 110.137C113.601 110.137 112.787 109.788 112.163 109.091C111.543 108.394 111.233 107.471 111.233 106.322V106.233ZM112.505 106.384C112.505 107.204 112.694 107.863 113.072 108.359C113.455 108.856 113.965 109.104 114.604 109.104C115.246 109.104 115.757 108.854 116.135 108.353C116.513 107.847 116.702 107.14 116.702 106.233C116.702 105.422 116.508 104.766 116.121 104.265C115.738 103.759 115.228 103.506 114.59 103.506C113.965 103.506 113.462 103.754 113.079 104.251C112.696 104.748 112.505 105.459 112.505 106.384ZM120.742 102.604L120.776 103.424C121.319 102.786 122.05 102.467 122.971 102.467C124.005 102.467 124.709 102.863 125.083 103.656C125.329 103.301 125.648 103.014 126.04 102.795C126.437 102.576 126.904 102.467 127.441 102.467C129.064 102.467 129.889 103.326 129.916 105.044V110H128.651V105.119C128.651 104.59 128.531 104.196 128.289 103.937C128.048 103.672 127.642 103.54 127.072 103.54C126.603 103.54 126.213 103.681 125.903 103.964C125.593 104.242 125.413 104.618 125.363 105.092V110H124.092V105.153C124.092 104.078 123.565 103.54 122.513 103.54C121.683 103.54 121.116 103.893 120.811 104.6V110H119.546V102.604H120.742ZM141.414 105.755C141.414 107.236 141.161 108.337 140.655 109.057C140.149 109.777 139.359 110.137 138.283 110.137C137.221 110.137 136.435 109.786 135.925 109.084C135.414 108.378 135.15 107.325 135.132 105.926V104.237C135.132 102.774 135.385 101.688 135.891 100.977C136.396 100.266 137.189 99.9102 138.27 99.9102C139.34 99.9102 140.129 100.254 140.635 100.942C141.141 101.626 141.4 102.683 141.414 104.114V105.755ZM140.149 104.025C140.149 102.954 139.999 102.175 139.698 101.688C139.397 101.195 138.921 100.949 138.27 100.949C137.622 100.949 137.151 101.193 136.854 101.681C136.558 102.168 136.406 102.918 136.396 103.93V105.953C136.396 107.029 136.551 107.824 136.861 108.339C137.176 108.849 137.65 109.104 138.283 109.104C138.908 109.104 139.37 108.863 139.671 108.38C139.976 107.897 140.136 107.136 140.149 106.097V104.025Z" fill="black"/>
      </g>
      <g id="Room 2">
      <rect id="Rectangle 3" x="110" y="289" width="82" height="136" fill={this.toggleColor(2)} onClick={() => this.props.handleClick(2)}/>
      <path id="Room 2_2" d="M131.806 358.974H129.468V363H128.148V353.047H131.443C132.564 353.047 133.426 353.302 134.027 353.812C134.633 354.323 134.937 355.066 134.937 356.041C134.937 356.661 134.768 357.201 134.431 357.661C134.098 358.121 133.633 358.465 133.036 358.693L135.374 362.918V363H133.966L131.806 358.974ZM129.468 357.9H131.484C132.136 357.9 132.653 357.732 133.036 357.395C133.424 357.057 133.617 356.606 133.617 356.041C133.617 355.426 133.433 354.954 133.063 354.626C132.699 354.298 132.17 354.132 131.478 354.127H129.468V357.9ZM136.249 359.233C136.249 358.509 136.39 357.857 136.673 357.278C136.96 356.7 137.356 356.253 137.862 355.938C138.373 355.624 138.954 355.467 139.605 355.467C140.613 355.467 141.426 355.815 142.046 356.513C142.67 357.21 142.982 358.137 142.982 359.295V359.384C142.982 360.104 142.843 360.751 142.565 361.325C142.292 361.895 141.898 362.339 141.383 362.658C140.872 362.977 140.285 363.137 139.619 363.137C138.617 363.137 137.803 362.788 137.179 362.091C136.559 361.394 136.249 360.471 136.249 359.322V359.233ZM137.521 359.384C137.521 360.204 137.71 360.863 138.088 361.359C138.471 361.856 138.981 362.104 139.619 362.104C140.262 362.104 140.772 361.854 141.15 361.353C141.529 360.847 141.718 360.14 141.718 359.233C141.718 358.422 141.524 357.766 141.137 357.265C140.754 356.759 140.243 356.506 139.605 356.506C138.981 356.506 138.478 356.754 138.095 357.251C137.712 357.748 137.521 358.459 137.521 359.384ZM144.233 359.233C144.233 358.509 144.375 357.857 144.657 357.278C144.944 356.7 145.341 356.253 145.847 355.938C146.357 355.624 146.938 355.467 147.59 355.467C148.597 355.467 149.41 355.815 150.03 356.513C150.655 357.21 150.967 358.137 150.967 359.295V359.384C150.967 360.104 150.828 360.751 150.55 361.325C150.276 361.895 149.882 362.339 149.367 362.658C148.857 362.977 148.269 363.137 147.604 363.137C146.601 363.137 145.787 362.788 145.163 362.091C144.543 361.394 144.233 360.471 144.233 359.322V359.233ZM145.505 359.384C145.505 360.204 145.694 360.863 146.072 361.359C146.455 361.856 146.965 362.104 147.604 362.104C148.246 362.104 148.757 361.854 149.135 361.353C149.513 360.847 149.702 360.14 149.702 359.233C149.702 358.422 149.508 357.766 149.121 357.265C148.738 356.759 148.228 356.506 147.59 356.506C146.965 356.506 146.462 356.754 146.079 357.251C145.696 357.748 145.505 358.459 145.505 359.384ZM153.742 355.604L153.776 356.424C154.319 355.786 155.05 355.467 155.971 355.467C157.005 355.467 157.709 355.863 158.083 356.656C158.329 356.301 158.648 356.014 159.04 355.795C159.437 355.576 159.904 355.467 160.441 355.467C162.064 355.467 162.889 356.326 162.916 358.044V363H161.651V358.119C161.651 357.59 161.531 357.196 161.289 356.937C161.048 356.672 160.642 356.54 160.072 356.54C159.603 356.54 159.213 356.681 158.903 356.964C158.593 357.242 158.413 357.618 158.363 358.092V363H157.092V358.153C157.092 357.078 156.565 356.54 155.513 356.54C154.683 356.54 154.116 356.893 153.811 357.6V363H152.546V355.604H153.742ZM174.694 363H168.173V362.091L171.618 358.263C172.129 357.684 172.479 357.215 172.671 356.854C172.867 356.49 172.965 356.114 172.965 355.727C172.965 355.207 172.808 354.781 172.493 354.448C172.179 354.116 171.759 353.949 171.235 353.949C170.606 353.949 170.117 354.129 169.766 354.489C169.419 354.845 169.246 355.341 169.246 355.979H167.981C167.981 355.063 168.275 354.323 168.863 353.758C169.456 353.193 170.246 352.91 171.235 352.91C172.16 352.91 172.892 353.154 173.43 353.642C173.967 354.125 174.236 354.77 174.236 355.576C174.236 356.556 173.612 357.723 172.363 359.076L169.697 361.968H174.694V363Z" fill="black"/>
      </g>
      <g id="Room 3">
      <rect id="Rectangle 4" x="204" y="289" width="82" height="136" fill={this.toggleColor(3)} onClick={() => this.props.handleClick(3)}/>
      <path id="Room 3_2" d="M226.806 358.974H224.468V363H223.148V353.047H226.443C227.564 353.047 228.426 353.302 229.027 353.812C229.633 354.323 229.937 355.066 229.937 356.041C229.937 356.661 229.768 357.201 229.431 357.661C229.098 358.121 228.633 358.465 228.036 358.693L230.374 362.918V363H228.966L226.806 358.974ZM224.468 357.9H226.484C227.136 357.9 227.653 357.732 228.036 357.395C228.424 357.057 228.617 356.606 228.617 356.041C228.617 355.426 228.433 354.954 228.063 354.626C227.699 354.298 227.17 354.132 226.478 354.127H224.468V357.9ZM231.249 359.233C231.249 358.509 231.39 357.857 231.673 357.278C231.96 356.7 232.356 356.253 232.862 355.938C233.373 355.624 233.954 355.467 234.605 355.467C235.613 355.467 236.426 355.815 237.046 356.513C237.67 357.21 237.982 358.137 237.982 359.295V359.384C237.982 360.104 237.843 360.751 237.565 361.325C237.292 361.895 236.898 362.339 236.383 362.658C235.872 362.977 235.285 363.137 234.619 363.137C233.617 363.137 232.803 362.788 232.179 362.091C231.559 361.394 231.249 360.471 231.249 359.322V359.233ZM232.521 359.384C232.521 360.204 232.71 360.863 233.088 361.359C233.471 361.856 233.981 362.104 234.619 362.104C235.262 362.104 235.772 361.854 236.15 361.353C236.529 360.847 236.718 360.14 236.718 359.233C236.718 358.422 236.524 357.766 236.137 357.265C235.754 356.759 235.243 356.506 234.605 356.506C233.981 356.506 233.478 356.754 233.095 357.251C232.712 357.748 232.521 358.459 232.521 359.384ZM239.233 359.233C239.233 358.509 239.375 357.857 239.657 357.278C239.944 356.7 240.341 356.253 240.847 355.938C241.357 355.624 241.938 355.467 242.59 355.467C243.597 355.467 244.41 355.815 245.03 356.513C245.655 357.21 245.967 358.137 245.967 359.295V359.384C245.967 360.104 245.828 360.751 245.55 361.325C245.276 361.895 244.882 362.339 244.367 362.658C243.857 362.977 243.269 363.137 242.604 363.137C241.601 363.137 240.787 362.788 240.163 362.091C239.543 361.394 239.233 360.471 239.233 359.322V359.233ZM240.505 359.384C240.505 360.204 240.694 360.863 241.072 361.359C241.455 361.856 241.965 362.104 242.604 362.104C243.246 362.104 243.757 361.854 244.135 361.353C244.513 360.847 244.702 360.14 244.702 359.233C244.702 358.422 244.508 357.766 244.121 357.265C243.738 356.759 243.228 356.506 242.59 356.506C241.965 356.506 241.462 356.754 241.079 357.251C240.696 357.748 240.505 358.459 240.505 359.384ZM248.742 355.604L248.776 356.424C249.319 355.786 250.05 355.467 250.971 355.467C252.005 355.467 252.709 355.863 253.083 356.656C253.329 356.301 253.648 356.014 254.04 355.795C254.437 355.576 254.904 355.467 255.441 355.467C257.064 355.467 257.889 356.326 257.916 358.044V363H256.651V358.119C256.651 357.59 256.531 357.196 256.289 356.937C256.048 356.672 255.642 356.54 255.072 356.54C254.603 356.54 254.213 356.681 253.903 356.964C253.593 357.242 253.413 357.618 253.363 358.092V363H252.092V358.153C252.092 357.078 251.565 356.54 250.513 356.54C249.683 356.54 249.116 356.893 248.811 357.6V363H247.546V355.604H248.742ZM265.012 357.408H265.962C266.559 357.399 267.028 357.242 267.37 356.937C267.712 356.631 267.883 356.219 267.883 355.699C267.883 354.533 267.302 353.949 266.14 353.949C265.593 353.949 265.155 354.106 264.827 354.421C264.504 354.731 264.342 355.143 264.342 355.658H263.077C263.077 354.87 263.364 354.216 263.938 353.696C264.517 353.172 265.251 352.91 266.14 352.91C267.078 352.91 267.814 353.159 268.348 353.655C268.881 354.152 269.147 354.842 269.147 355.727C269.147 356.16 269.006 356.579 268.724 356.984C268.446 357.39 268.065 357.693 267.582 357.894C268.129 358.067 268.55 358.354 268.847 358.755C269.147 359.156 269.298 359.646 269.298 360.225C269.298 361.118 269.006 361.826 268.423 362.351C267.84 362.875 267.081 363.137 266.146 363.137C265.212 363.137 264.451 362.884 263.863 362.378C263.28 361.872 262.988 361.204 262.988 360.375H264.26C264.26 360.899 264.431 361.318 264.772 361.633C265.114 361.947 265.572 362.104 266.146 362.104C266.757 362.104 267.224 361.945 267.548 361.626C267.871 361.307 268.033 360.849 268.033 360.252C268.033 359.673 267.855 359.229 267.5 358.919C267.145 358.609 266.632 358.45 265.962 358.44H265.012V357.408Z" fill="black"/>
      </g>
      <g id="Room 4">
      <g id="Group 3">
      <rect id="Rectangle 5" x="298" y="289" width="82" height="136" fill={this.toggleColor(4)} onClick={() => this.props.handleClick(4)}/>
      </g>
      <path id="Room 4_2" d="M321.806 358.974H319.468V363H318.148V353.047H321.443C322.564 353.047 323.426 353.302 324.027 353.812C324.633 354.323 324.937 355.066 324.937 356.041C324.937 356.661 324.768 357.201 324.431 357.661C324.098 358.121 323.633 358.465 323.036 358.693L325.374 362.918V363H323.966L321.806 358.974ZM319.468 357.9H321.484C322.136 357.9 322.653 357.732 323.036 357.395C323.424 357.057 323.617 356.606 323.617 356.041C323.617 355.426 323.433 354.954 323.063 354.626C322.699 354.298 322.17 354.132 321.478 354.127H319.468V357.9ZM326.249 359.233C326.249 358.509 326.39 357.857 326.673 357.278C326.96 356.7 327.356 356.253 327.862 355.938C328.373 355.624 328.954 355.467 329.605 355.467C330.613 355.467 331.426 355.815 332.046 356.513C332.67 357.21 332.982 358.137 332.982 359.295V359.384C332.982 360.104 332.843 360.751 332.565 361.325C332.292 361.895 331.898 362.339 331.383 362.658C330.872 362.977 330.285 363.137 329.619 363.137C328.617 363.137 327.803 362.788 327.179 362.091C326.559 361.394 326.249 360.471 326.249 359.322V359.233ZM327.521 359.384C327.521 360.204 327.71 360.863 328.088 361.359C328.471 361.856 328.981 362.104 329.619 362.104C330.262 362.104 330.772 361.854 331.15 361.353C331.529 360.847 331.718 360.14 331.718 359.233C331.718 358.422 331.524 357.766 331.137 357.265C330.754 356.759 330.243 356.506 329.605 356.506C328.981 356.506 328.478 356.754 328.095 357.251C327.712 357.748 327.521 358.459 327.521 359.384ZM334.233 359.233C334.233 358.509 334.375 357.857 334.657 357.278C334.944 356.7 335.341 356.253 335.847 355.938C336.357 355.624 336.938 355.467 337.59 355.467C338.597 355.467 339.41 355.815 340.03 356.513C340.655 357.21 340.967 358.137 340.967 359.295V359.384C340.967 360.104 340.828 360.751 340.55 361.325C340.276 361.895 339.882 362.339 339.367 362.658C338.857 362.977 338.269 363.137 337.604 363.137C336.601 363.137 335.787 362.788 335.163 362.091C334.543 361.394 334.233 360.471 334.233 359.322V359.233ZM335.505 359.384C335.505 360.204 335.694 360.863 336.072 361.359C336.455 361.856 336.965 362.104 337.604 362.104C338.246 362.104 338.757 361.854 339.135 361.353C339.513 360.847 339.702 360.14 339.702 359.233C339.702 358.422 339.508 357.766 339.121 357.265C338.738 356.759 338.228 356.506 337.59 356.506C336.965 356.506 336.462 356.754 336.079 357.251C335.696 357.748 335.505 358.459 335.505 359.384ZM343.742 355.604L343.776 356.424C344.319 355.786 345.05 355.467 345.971 355.467C347.005 355.467 347.709 355.863 348.083 356.656C348.329 356.301 348.648 356.014 349.04 355.795C349.437 355.576 349.904 355.467 350.441 355.467C352.064 355.467 352.889 356.326 352.916 358.044V363H351.651V358.119C351.651 357.59 351.531 357.196 351.289 356.937C351.048 356.672 350.642 356.54 350.072 356.54C349.603 356.54 349.213 356.681 348.903 356.964C348.593 357.242 348.413 357.618 348.363 358.092V363H347.092V358.153C347.092 357.078 346.565 356.54 345.513 356.54C344.683 356.54 344.116 356.893 343.811 357.6V363H342.546V355.604H343.742ZM363.512 359.657H364.893V360.689H363.512V363H362.24V360.689H357.708V359.944L362.165 353.047H363.512V359.657ZM359.144 359.657H362.24V354.776L362.09 355.05L359.144 359.657Z" fill="black"/>
      </g>
      <g id="Room 5">
      <rect id="Rectangle 6" x="392" y="289" width="82" height="136" fill={this.toggleColor(5)} onClick={() => this.props.handleClick(5)}/>
      <path id="Room 5_2" d="M414.806 358.974H412.468V363H411.148V353.047H414.443C415.564 353.047 416.426 353.302 417.027 353.812C417.633 354.323 417.937 355.066 417.937 356.041C417.937 356.661 417.768 357.201 417.431 357.661C417.098 358.121 416.633 358.465 416.036 358.693L418.374 362.918V363H416.966L414.806 358.974ZM412.468 357.9H414.484C415.136 357.9 415.653 357.732 416.036 357.395C416.424 357.057 416.617 356.606 416.617 356.041C416.617 355.426 416.433 354.954 416.063 354.626C415.699 354.298 415.17 354.132 414.478 354.127H412.468V357.9ZM419.249 359.233C419.249 358.509 419.39 357.857 419.673 357.278C419.96 356.7 420.356 356.253 420.862 355.938C421.373 355.624 421.954 355.467 422.605 355.467C423.613 355.467 424.426 355.815 425.046 356.513C425.67 357.21 425.982 358.137 425.982 359.295V359.384C425.982 360.104 425.843 360.751 425.565 361.325C425.292 361.895 424.898 362.339 424.383 362.658C423.872 362.977 423.285 363.137 422.619 363.137C421.617 363.137 420.803 362.788 420.179 362.091C419.559 361.394 419.249 360.471 419.249 359.322V359.233ZM420.521 359.384C420.521 360.204 420.71 360.863 421.088 361.359C421.471 361.856 421.981 362.104 422.619 362.104C423.262 362.104 423.772 361.854 424.15 361.353C424.529 360.847 424.718 360.14 424.718 359.233C424.718 358.422 424.524 357.766 424.137 357.265C423.754 356.759 423.243 356.506 422.605 356.506C421.981 356.506 421.478 356.754 421.095 357.251C420.712 357.748 420.521 358.459 420.521 359.384ZM427.233 359.233C427.233 358.509 427.375 357.857 427.657 357.278C427.944 356.7 428.341 356.253 428.847 355.938C429.357 355.624 429.938 355.467 430.59 355.467C431.597 355.467 432.41 355.815 433.03 356.513C433.655 357.21 433.967 358.137 433.967 359.295V359.384C433.967 360.104 433.828 360.751 433.55 361.325C433.276 361.895 432.882 362.339 432.367 362.658C431.857 362.977 431.269 363.137 430.604 363.137C429.601 363.137 428.787 362.788 428.163 362.091C427.543 361.394 427.233 360.471 427.233 359.322V359.233ZM428.505 359.384C428.505 360.204 428.694 360.863 429.072 361.359C429.455 361.856 429.965 362.104 430.604 362.104C431.246 362.104 431.757 361.854 432.135 361.353C432.513 360.847 432.702 360.14 432.702 359.233C432.702 358.422 432.508 357.766 432.121 357.265C431.738 356.759 431.228 356.506 430.59 356.506C429.965 356.506 429.462 356.754 429.079 357.251C428.696 357.748 428.505 358.459 428.505 359.384ZM436.742 355.604L436.776 356.424C437.319 355.786 438.05 355.467 438.971 355.467C440.005 355.467 440.709 355.863 441.083 356.656C441.329 356.301 441.648 356.014 442.04 355.795C442.437 355.576 442.904 355.467 443.441 355.467C445.064 355.467 445.889 356.326 445.916 358.044V363H444.651V358.119C444.651 357.59 444.531 357.196 444.289 356.937C444.048 356.672 443.642 356.54 443.072 356.54C442.603 356.54 442.213 356.681 441.903 356.964C441.593 357.242 441.413 357.618 441.363 358.092V363H440.092V358.153C440.092 357.078 439.565 356.54 438.513 356.54C437.683 356.54 437.116 356.893 436.811 357.6V363H435.546V355.604H436.742ZM451.754 358.01L452.26 353.047H457.359V354.216H453.333L453.032 356.93C453.52 356.643 454.074 356.499 454.693 356.499C455.6 356.499 456.32 356.8 456.854 357.401C457.387 357.998 457.653 358.807 457.653 359.828C457.653 360.854 457.375 361.662 456.819 362.255C456.268 362.843 455.495 363.137 454.502 363.137C453.622 363.137 452.905 362.893 452.349 362.405C451.793 361.918 451.476 361.243 451.398 360.382H452.595C452.672 360.951 452.875 361.382 453.203 361.674C453.531 361.961 453.964 362.104 454.502 362.104C455.09 362.104 455.55 361.904 455.883 361.503C456.22 361.102 456.389 360.548 456.389 359.842C456.389 359.176 456.206 358.643 455.842 358.242C455.482 357.837 455.001 357.634 454.399 357.634C453.848 357.634 453.415 357.755 453.101 357.996L452.766 358.27L451.754 358.01Z" fill="black"/>
      </g>
      <g id="Room 6">
      <rect id="Rectangle 7" x="486" y="289" width="82" height="136" fill={this.toggleColor(6)} onClick={() => this.props.handleClick(6)}/>
      <path id="Room 6_2" d="M508.806 358.974H506.468V363H505.148V353.047H508.443C509.564 353.047 510.426 353.302 511.027 353.812C511.633 354.323 511.937 355.066 511.937 356.041C511.937 356.661 511.768 357.201 511.431 357.661C511.098 358.121 510.633 358.465 510.036 358.693L512.374 362.918V363H510.966L508.806 358.974ZM506.468 357.9H508.484C509.136 357.9 509.653 357.732 510.036 357.395C510.424 357.057 510.617 356.606 510.617 356.041C510.617 355.426 510.433 354.954 510.063 354.626C509.699 354.298 509.17 354.132 508.478 354.127H506.468V357.9ZM513.249 359.233C513.249 358.509 513.39 357.857 513.673 357.278C513.96 356.7 514.356 356.253 514.862 355.938C515.373 355.624 515.954 355.467 516.605 355.467C517.613 355.467 518.426 355.815 519.046 356.513C519.67 357.21 519.982 358.137 519.982 359.295V359.384C519.982 360.104 519.843 360.751 519.565 361.325C519.292 361.895 518.898 362.339 518.383 362.658C517.872 362.977 517.285 363.137 516.619 363.137C515.617 363.137 514.803 362.788 514.179 362.091C513.559 361.394 513.249 360.471 513.249 359.322V359.233ZM514.521 359.384C514.521 360.204 514.71 360.863 515.088 361.359C515.471 361.856 515.981 362.104 516.619 362.104C517.262 362.104 517.772 361.854 518.15 361.353C518.529 360.847 518.718 360.14 518.718 359.233C518.718 358.422 518.524 357.766 518.137 357.265C517.754 356.759 517.243 356.506 516.605 356.506C515.981 356.506 515.478 356.754 515.095 357.251C514.712 357.748 514.521 358.459 514.521 359.384ZM521.233 359.233C521.233 358.509 521.375 357.857 521.657 357.278C521.944 356.7 522.341 356.253 522.847 355.938C523.357 355.624 523.938 355.467 524.59 355.467C525.597 355.467 526.41 355.815 527.03 356.513C527.655 357.21 527.967 358.137 527.967 359.295V359.384C527.967 360.104 527.828 360.751 527.55 361.325C527.276 361.895 526.882 362.339 526.367 362.658C525.857 362.977 525.269 363.137 524.604 363.137C523.601 363.137 522.787 362.788 522.163 362.091C521.543 361.394 521.233 360.471 521.233 359.322V359.233ZM522.505 359.384C522.505 360.204 522.694 360.863 523.072 361.359C523.455 361.856 523.965 362.104 524.604 362.104C525.246 362.104 525.757 361.854 526.135 361.353C526.513 360.847 526.702 360.14 526.702 359.233C526.702 358.422 526.508 357.766 526.121 357.265C525.738 356.759 525.228 356.506 524.59 356.506C523.965 356.506 523.462 356.754 523.079 357.251C522.696 357.748 522.505 358.459 522.505 359.384ZM530.742 355.604L530.776 356.424C531.319 355.786 532.05 355.467 532.971 355.467C534.005 355.467 534.709 355.863 535.083 356.656C535.329 356.301 535.648 356.014 536.04 355.795C536.437 355.576 536.904 355.467 537.441 355.467C539.064 355.467 539.889 356.326 539.916 358.044V363H538.651V358.119C538.651 357.59 538.531 357.196 538.289 356.937C538.048 356.672 537.642 356.54 537.072 356.54C536.603 356.54 536.213 356.681 535.903 356.964C535.593 357.242 535.413 357.618 535.363 358.092V363H534.092V358.153C534.092 357.078 533.565 356.54 532.513 356.54C531.683 356.54 531.116 356.893 530.811 357.6V363H529.546V355.604H530.742ZM550.136 353.04V354.113H549.903C548.919 354.132 548.135 354.423 547.552 354.988C546.968 355.553 546.631 356.349 546.54 357.374C547.064 356.772 547.78 356.472 548.687 356.472C549.552 356.472 550.243 356.777 550.758 357.388C551.277 357.998 551.537 358.787 551.537 359.753C551.537 360.778 551.257 361.599 550.696 362.214C550.14 362.829 549.393 363.137 548.454 363.137C547.502 363.137 546.729 362.772 546.137 362.043C545.544 361.309 545.248 360.366 545.248 359.213V358.728C545.248 356.896 545.638 355.496 546.417 354.53C547.201 353.56 548.365 353.063 549.91 353.04H550.136ZM548.475 357.524C548.042 357.524 547.643 357.654 547.278 357.914C546.914 358.174 546.661 358.5 546.52 358.892V359.356C546.52 360.177 546.704 360.838 547.073 361.339C547.442 361.84 547.903 362.091 548.454 362.091C549.024 362.091 549.47 361.881 549.794 361.462C550.122 361.043 550.286 360.493 550.286 359.814C550.286 359.131 550.12 358.579 549.787 358.16C549.459 357.736 549.021 357.524 548.475 357.524Z" fill="black"/>
      </g>
      </g>
      </svg>

    );
  }
}

export default FloorplanView;
