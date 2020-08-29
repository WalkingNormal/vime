/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@vime/core';


interface VimeTooltipProps {
  
  /** Whether the tooltip is displayed or not. */
  hidden?: Components.VimeTooltip["hidden"]
  
  /** Whether the tooltip is visible or not. */
  active?: Components.VimeTooltip["active"]
  
  /** Determines if the tooltip appears on top/bottom of it's parent. */
  position?: Components.VimeTooltip["position"]
  
  /** Determines if the tooltip should grow according to its contents to the left/right. By default
content grows outwards from the center. */
  direction?: Components.VimeTooltip["direction"]
  
  /**  */
  isTouch?: Components.VimeTooltip["isTouch"]
}

interface VimeTooltipEvents {
  
}

interface VimeTooltipSlots {
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
	let vime_tooltip;
	let current;
	const default_slot_template = /*$$slots*/ ctx[8].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

	return {
		c() {
			vime_tooltip = element("vime-tooltip");
			if (default_slot) default_slot.c();
			vime_tooltip.hidden = /*hidden*/ ctx[0];
			set_custom_element_data(vime_tooltip, "active", /*active*/ ctx[1]);
			set_custom_element_data(vime_tooltip, "position", /*position*/ ctx[2]);
			set_custom_element_data(vime_tooltip, "direction", /*direction*/ ctx[3]);
			set_custom_element_data(vime_tooltip, "is-touch", /*isTouch*/ ctx[4]);
		},
		m(target, anchor) {
			insert(target, vime_tooltip, anchor);

			if (default_slot) {
				default_slot.m(vime_tooltip, null);
			}

			/*vime_tooltip_binding*/ ctx[9](vime_tooltip);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 128) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[7], dirty, null, null);
				}
			}

			if (!current || dirty & /*hidden*/ 1) {
				vime_tooltip.hidden = /*hidden*/ ctx[0];
			}

			if (!current || dirty & /*active*/ 2) {
				set_custom_element_data(vime_tooltip, "active", /*active*/ ctx[1]);
			}

			if (!current || dirty & /*position*/ 4) {
				set_custom_element_data(vime_tooltip, "position", /*position*/ ctx[2]);
			}

			if (!current || dirty & /*direction*/ 8) {
				set_custom_element_data(vime_tooltip, "direction", /*direction*/ ctx[3]);
			}

			if (!current || dirty & /*isTouch*/ 16) {
				set_custom_element_data(vime_tooltip, "is-touch", /*isTouch*/ ctx[4]);
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
			if (detaching) detach(vime_tooltip);
			if (default_slot) default_slot.d(detaching);
			/*vime_tooltip_binding*/ ctx[9](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { hidden = undefined } = $$props;
	let { active = undefined } = $$props;
	let { position = undefined } = $$props;
	let { direction = undefined } = $$props;
	let { isTouch = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(5, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	let { $$slots = {}, $$scope } = $$props;

	function vime_tooltip_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(5, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("hidden" in $$props) $$invalidate(0, hidden = $$props.hidden);
		if ("active" in $$props) $$invalidate(1, active = $$props.active);
		if ("position" in $$props) $$invalidate(2, position = $$props.position);
		if ("direction" in $$props) $$invalidate(3, direction = $$props.direction);
		if ("isTouch" in $$props) $$invalidate(4, isTouch = $$props.isTouch);
		if ("$$scope" in $$props) $$invalidate(7, $$scope = $$props.$$scope);
	};

	return [
		hidden,
		active,
		position,
		direction,
		isTouch,
		__ref,
		getWebComponent,
		$$scope,
		$$slots,
		vime_tooltip_binding
	];
}

class VimeTooltip extends SvelteComponent {
  $$prop_def: VimeTooltipProps;
  $$events_def: VimeTooltipEvents;
  $$slot_def: VimeTooltipSlots;

  $on<K extends keyof VimeTooltipEvents>(type: K, callback: (e: VimeTooltipEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<VimeTooltipProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			hidden: 0,
			active: 1,
			position: 2,
			direction: 3,
			isTouch: 4,
			getWebComponent: 6
		});
	}

	get getWebComponent(): HTMLVimeTooltipElement | undefined {
		return this.$$.ctx[6];
	}
}

export default VimeTooltip;