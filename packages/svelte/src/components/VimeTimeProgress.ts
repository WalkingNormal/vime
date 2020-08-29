/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@vime/core';


interface VimeTimeProgressProps {
  
  /** The string used to separate the current time and end time. */
  separator?: Components.VimeTimeProgress["separator"]
  
  /** Whether the times should always show the hours unit, even if the time is less than
1 hour (eg: `20:35` -> `00:20:35`). */
  alwaysShowHours?: Components.VimeTimeProgress["alwaysShowHours"]
}

interface VimeTimeProgressEvents {
  
}

interface VimeTimeProgressSlots {
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
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher, onMount } from "svelte";

function create_fragment(ctx) {
	let vime_time_progress;
	let current;
	const default_slot_template = /*$$slots*/ ctx[5].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[4], null);

	return {
		c() {
			vime_time_progress = element("vime-time-progress");
			if (default_slot) default_slot.c();
			set_custom_element_data(vime_time_progress, "separator", /*separator*/ ctx[0]);
			set_custom_element_data(vime_time_progress, "always-show-hours", /*alwaysShowHours*/ ctx[1]);
		},
		m(target, anchor) {
			insert(target, vime_time_progress, anchor);

			if (default_slot) {
				default_slot.m(vime_time_progress, null);
			}

			/*vime_time_progress_binding*/ ctx[6](vime_time_progress);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 16) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[4], dirty, null, null);
				}
			}

			if (!current || dirty & /*separator*/ 1) {
				set_custom_element_data(vime_time_progress, "separator", /*separator*/ ctx[0]);
			}

			if (!current || dirty & /*alwaysShowHours*/ 2) {
				set_custom_element_data(vime_time_progress, "always-show-hours", /*alwaysShowHours*/ ctx[1]);
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
			if (detaching) detach(vime_time_progress);
			if (default_slot) default_slot.d(detaching);
			/*vime_time_progress_binding*/ ctx[6](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { separator = undefined } = $$props;
	let { alwaysShowHours = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(2, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	let { $$slots = {}, $$scope } = $$props;

	function vime_time_progress_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(2, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("separator" in $$props) $$invalidate(0, separator = $$props.separator);
		if ("alwaysShowHours" in $$props) $$invalidate(1, alwaysShowHours = $$props.alwaysShowHours);
		if ("$$scope" in $$props) $$invalidate(4, $$scope = $$props.$$scope);
	};

	return [
		separator,
		alwaysShowHours,
		__ref,
		getWebComponent,
		$$scope,
		$$slots,
		vime_time_progress_binding
	];
}

class VimeTimeProgress extends SvelteComponent {
  $$prop_def: VimeTimeProgressProps;
  $$events_def: VimeTimeProgressEvents;
  $$slot_def: VimeTimeProgressSlots;

  $on<K extends keyof VimeTimeProgressEvents>(type: K, callback: (e: VimeTimeProgressEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<VimeTimeProgressProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			separator: 0,
			alwaysShowHours: 1,
			getWebComponent: 3
		});
	}

	get getWebComponent(): HTMLVimeTimeProgressElement | undefined {
		return this.$$.ctx[3];
	}
}

export default VimeTimeProgress;