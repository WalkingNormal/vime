/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@vime/core';


interface VimeDashProps {
  
  /** The URL of the `manifest.mpd` file to use. */
  src?: Components.VimeDash["src"]
  
  /** The NPM package version of the `dashjs` library to download and use. */
  version?: Components.VimeDash["version"]
  
  /** The `dashjs` configuration. */
  config?: Components.VimeDash["config"]
  
  /**  */
  autoplay?: Components.VimeDash["autoplay"]
  
  /** Whether to use CORS to fetch the related image. See
[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin) for more
information. */
  crossOrigin?: Components.VimeDash["crossOrigin"]
  
  /** Provides a hint to the browser about what the author thinks will lead to the best user
experience with regards to what content is loaded before the video is played. See
[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#attr-preload) for more
information. */
  preload?: Components.VimeDash["preload"]
  
  /** A URL for an image to be shown while the video is downloading. If this attribute isn't
specified, nothing is displayed until the first frame is available, then the first frame is
shown as the poster frame. */
  poster?: Components.VimeDash["poster"]
  
  /** Determines what controls to show on the media element whenever the browser shows its own set
of controls (e.g. when the controls attribute is specified). */
  controlsList?: Components.VimeDash["controlsList"]
  
  /** **EXPERIMENTAL:** Whether the browser should automatically toggle picture-in-picture mode as
the user switches back and forth between this document and another document or application. */
  autoPiP?: Components.VimeDash["autoPiP"]
  
  /** **EXPERIMENTAL:** Prevents the browser from suggesting a picture-in-picture context menu or to
request picture-in-picture automatically in some cases. */
  disablePiP?: Components.VimeDash["disablePiP"]
  
  /** **EXPERIMENTAL:** Whether to disable the capability of remote playback in devices that are
attached using wired (HDMI, DVI, etc.) and wireless technologies
(Miracast, Chromecast, DLNA, AirPlay, etc). */
  disableRemotePlayback?: Components.VimeDash["disableRemotePlayback"]
  
  /** The title of the current media. */
  mediaTitle?: Components.VimeDash["mediaTitle"]
}

interface VimeDashEvents {
  
  /**  */
  vLoadStart: Parameters<JSX.VimeDash["onVLoadStart"]>[0]
}

interface VimeDashSlots {
  default: any
}
  
/* generated by Svelte v3.24.1 */
import {
	SvelteComponent,
	binding_callbacks,
	create_slot,
	detach,
	element,
	init,
	insert,
	listen,
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher, onMount } from "svelte";

function create_fragment(ctx) {
	let vime_dash;
	let vime_dash_src_value;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*$$slots*/ ctx[17].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[16], null);

	return {
		c() {
			vime_dash = element("vime-dash");
			if (default_slot) default_slot.c();
			if (vime_dash.src !== (vime_dash_src_value = /*src*/ ctx[0])) set_custom_element_data(vime_dash, "src", vime_dash_src_value);
			set_custom_element_data(vime_dash, "version", /*version*/ ctx[1]);
			set_custom_element_data(vime_dash, "autoplay", /*autoplay*/ ctx[2]);
			set_custom_element_data(vime_dash, "cross-origin", /*crossOrigin*/ ctx[3]);
			set_custom_element_data(vime_dash, "preload", /*preload*/ ctx[4]);
			set_custom_element_data(vime_dash, "poster", /*poster*/ ctx[5]);
			set_custom_element_data(vime_dash, "controls-list", /*controlsList*/ ctx[6]);
			set_custom_element_data(vime_dash, "auto-pip", /*autoPiP*/ ctx[7]);
			set_custom_element_data(vime_dash, "disable-pip", /*disablePiP*/ ctx[8]);
			set_custom_element_data(vime_dash, "disable-remote-playback", /*disableRemotePlayback*/ ctx[9]);
			set_custom_element_data(vime_dash, "media-title", /*mediaTitle*/ ctx[10]);
		},
		m(target, anchor) {
			insert(target, vime_dash, anchor);

			if (default_slot) {
				default_slot.m(vime_dash, null);
			}

			/*vime_dash_binding*/ ctx[18](vime_dash);
			current = true;

			if (!mounted) {
				dispose = listen(vime_dash, "vLoadStart", /*onEvent*/ ctx[12]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 65536) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[16], dirty, null, null);
				}
			}

			if (!current || dirty & /*src*/ 1 && vime_dash.src !== (vime_dash_src_value = /*src*/ ctx[0])) {
				set_custom_element_data(vime_dash, "src", vime_dash_src_value);
			}

			if (!current || dirty & /*version*/ 2) {
				set_custom_element_data(vime_dash, "version", /*version*/ ctx[1]);
			}

			if (!current || dirty & /*autoplay*/ 4) {
				set_custom_element_data(vime_dash, "autoplay", /*autoplay*/ ctx[2]);
			}

			if (!current || dirty & /*crossOrigin*/ 8) {
				set_custom_element_data(vime_dash, "cross-origin", /*crossOrigin*/ ctx[3]);
			}

			if (!current || dirty & /*preload*/ 16) {
				set_custom_element_data(vime_dash, "preload", /*preload*/ ctx[4]);
			}

			if (!current || dirty & /*poster*/ 32) {
				set_custom_element_data(vime_dash, "poster", /*poster*/ ctx[5]);
			}

			if (!current || dirty & /*controlsList*/ 64) {
				set_custom_element_data(vime_dash, "controls-list", /*controlsList*/ ctx[6]);
			}

			if (!current || dirty & /*autoPiP*/ 128) {
				set_custom_element_data(vime_dash, "auto-pip", /*autoPiP*/ ctx[7]);
			}

			if (!current || dirty & /*disablePiP*/ 256) {
				set_custom_element_data(vime_dash, "disable-pip", /*disablePiP*/ ctx[8]);
			}

			if (!current || dirty & /*disableRemotePlayback*/ 512) {
				set_custom_element_data(vime_dash, "disable-remote-playback", /*disableRemotePlayback*/ ctx[9]);
			}

			if (!current || dirty & /*mediaTitle*/ 1024) {
				set_custom_element_data(vime_dash, "media-title", /*mediaTitle*/ ctx[10]);
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(vime_dash);
			if (default_slot) default_slot.d(detaching);
			/*vime_dash_binding*/ ctx[18](null);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { src } = $$props;
	let { version = undefined } = $$props;
	let { config = undefined } = $$props;
	let { autoplay } = $$props;
	let { crossOrigin = undefined } = $$props;
	let { preload = undefined } = $$props;
	let { poster = undefined } = $$props;
	let { controlsList = undefined } = $$props;
	let { autoPiP = undefined } = $$props;
	let { disablePiP = undefined } = $$props;
	let { disableRemotePlayback = undefined } = $$props;
	let { mediaTitle = undefined } = $$props;
	const getAdapter = (...args) => __ref.getAdapter(...args);
	const getWebComponent = () => __ref;

	onMount(() => {
		$$invalidate(19, __mounted = true);
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(11, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	let { $$slots = {}, $$scope } = $$props;

	function vime_dash_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(11, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("src" in $$props) $$invalidate(0, src = $$props.src);
		if ("version" in $$props) $$invalidate(1, version = $$props.version);
		if ("config" in $$props) $$invalidate(13, config = $$props.config);
		if ("autoplay" in $$props) $$invalidate(2, autoplay = $$props.autoplay);
		if ("crossOrigin" in $$props) $$invalidate(3, crossOrigin = $$props.crossOrigin);
		if ("preload" in $$props) $$invalidate(4, preload = $$props.preload);
		if ("poster" in $$props) $$invalidate(5, poster = $$props.poster);
		if ("controlsList" in $$props) $$invalidate(6, controlsList = $$props.controlsList);
		if ("autoPiP" in $$props) $$invalidate(7, autoPiP = $$props.autoPiP);
		if ("disablePiP" in $$props) $$invalidate(8, disablePiP = $$props.disablePiP);
		if ("disableRemotePlayback" in $$props) $$invalidate(9, disableRemotePlayback = $$props.disableRemotePlayback);
		if ("mediaTitle" in $$props) $$invalidate(10, mediaTitle = $$props.mediaTitle);
		if ("$$scope" in $$props) $$invalidate(16, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*__mounted, config*/ 532480) {
			$: if (__mounted) setProp("config", config);
		}
	};

	return [
		src,
		version,
		autoplay,
		crossOrigin,
		preload,
		poster,
		controlsList,
		autoPiP,
		disablePiP,
		disableRemotePlayback,
		mediaTitle,
		__ref,
		onEvent,
		config,
		getAdapter,
		getWebComponent,
		$$scope,
		$$slots,
		vime_dash_binding
	];
}

class VimeDash extends SvelteComponent {
  $$prop_def: VimeDashProps;
  $$events_def: VimeDashEvents;
  $$slot_def: VimeDashSlots;

  $on<K extends keyof VimeDashEvents>(type: K, callback: (e: VimeDashEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<VimeDashProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			src: 0,
			version: 1,
			config: 13,
			autoplay: 2,
			crossOrigin: 3,
			preload: 4,
			poster: 5,
			controlsList: 6,
			autoPiP: 7,
			disablePiP: 8,
			disableRemotePlayback: 9,
			mediaTitle: 10,
			getAdapter: 14,
			getWebComponent: 15
		});
	}

	
  /**  */
 get getAdapter(): Components.VimeDash["getAdapter"] {
		return this.$$.ctx[14];
	}

	get getWebComponent(): HTMLVimeDashElement | undefined {
		return this.$$.ctx[15];
	}
}

export default VimeDash;