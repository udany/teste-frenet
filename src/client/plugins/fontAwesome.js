import { library } from "@fortawesome/fontawesome-svg-core";

import {
	faTimes,
	faHome,
	faMusic,
	faStar,
	faHistory,
	faSave
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import FaIcon from "../components/FaIcon.vue";

library.add(
	faTimes,
	faHome,
	faMusic,
	faStar,
	faHistory,
	faSave
);

export default function (app) {
	app.component('font-awesome-icon', FontAwesomeIcon);
	app.component('FaIcon', FaIcon);
}
