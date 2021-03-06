// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8RHrKmZAcQEsZmmwUYwkrZ
// Component: NFbzZMX1BbIlx
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: 6tk_BTLiSkfcB/component
import TopSection from "../../TopSection"; // plasmic-import: 99Tw9_1M990_v/component
import Section from "../../Section"; // plasmic-import: UzEVK_1S1P0qR/component
import FeatureCard from "../../FeatureCard"; // plasmic-import: CosNx7E37499C/component
import Testimonial from "../../Testimonial"; // plasmic-import: 9s2bO_mmPJm4t_/component
import HomeCta from "../../HomeCta"; // plasmic-import: uHgAdlhFQ8iXe/component
import Footer from "../../Footer"; // plasmic-import: ZMXBB0tH7mnlv/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 8KHggsJizcRTRt/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: 8RHrKmZAcQEsZmmwUYwkrZ/projectcss
import * as sty from "./PlasmicHome.module.css"; // plasmic-import: NFbzZMX1BbIlx/css

import LightningIcon from "./icons/PlasmicIcon__Lightning"; // plasmic-import: 4d4T0I8Wbe18c8/icon
import HammerIcon from "./icons/PlasmicIcon__Hammer"; // plasmic-import: wprg9CYCL0MHS5/icon
import PencilIcon from "./icons/PlasmicIcon__Pencil"; // plasmic-import: ICmSO_obMpc2Tg/icon
import SwapIcon from "./icons/PlasmicIcon__Swap"; // plasmic-import: uIo3144PO4AIqq/icon
import SlotIcon from "./icons/PlasmicIcon__Slot"; // plasmic-import: XTX3idzP06ovzt/icon
import CycleIcon from "./icons/PlasmicIcon__Cycle"; // plasmic-import: 8rfU8xasj2K0vi/icon
import FacebookLogoIcon from "./icons/PlasmicIcon__FacebookLogo"; // plasmic-import: SHqqiMAsecbAeb/icon
import TinderLogoIcon from "./icons/PlasmicIcon__TinderLogo"; // plasmic-import: SWdaFLWAitL3Rc/icon
import AirbnbLogoIcon from "./icons/PlasmicIcon__AirbnbLogo"; // plasmic-import: KdUzo6ODGmM8h-/icon
import HubspotLogoIcon from "./icons/PlasmicIcon__HubspotLogo"; // plasmic-import: ha_ePJi60T1BzL/icon
import AmazonLogoIcon from "./icons/PlasmicIcon__AmazonLogo"; // plasmic-import: XZ-HhHRG_2sw06/icon

export type PlasmicHome__VariantMembers = {};

export type PlasmicHome__VariantsArgs = {};
type VariantPropType = keyof PlasmicHome__VariantsArgs;
export const PlasmicHome__VariantProps = new Array<VariantPropType>();

export type PlasmicHome__ArgsType = {};
type ArgPropType = keyof PlasmicHome__ArgsType;
export const PlasmicHome__ArgProps = new Array<ArgPropType>();

export type PlasmicHome__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  topSection?: p.Flex<typeof TopSection>;
  testimonial?: p.Flex<typeof Testimonial>;
  homeCta?: p.Flex<typeof HomeCta>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultHomeProps {
  className?: string;
}

function PlasmicHome__RenderFunc(props: {
  variants: PlasmicHome__VariantsArgs;
  args: PlasmicHome__ArgsType;
  overrides: PlasmicHome__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <React.Fragment>
      <Head>
        <title key="title">{""}</title>
      </Head>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__oiTt)}
          >
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />

            <TopSection
              data-plasmic-name={"topSection"}
              data-plasmic-override={overrides.topSection}
              className={classNames("__wab_instance", sty.topSection)}
            />

            <Section
              className={classNames("__wab_instance", sty.section__uRdo)}
              subtitle={
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
              }
              title={"Explore the solutions"}
            />

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__lNMv)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__plDxt)}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__kuu9P
                  )}
                >
                  {"Powerful suite of tools"}
                </div>

                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__jQxOa
                  )}
                >
                  {
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa."
                  }
                </div>

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__pVClo
                  )}
                  description={
                    "Taking collaboration to the next level with security and administrative features built for teams"
                  }
                  iconBack={
                    <LightningIcon
                      className={classNames(defaultcss.all, sty.svg___78Ir)}
                      role={"img"}
                    />
                  }
                  long={"long" as const}
                  title={"Building the Simple ecosystem"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__c5Z2S
                  )}
                  description={
                    "Taking collaboration to the next level with security and administrative features built for teams"
                  }
                  iconBack={
                    <HammerIcon
                      className={classNames(defaultcss.all, sty.svg__gtR1)}
                      role={"img"}
                    />
                  }
                  long={"long" as const}
                  title={"Building the Simple Ecosystem"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__lIezu
                  )}
                  description={
                    "Taking collaboration to the next level with security and administrative features built for teams"
                  }
                  iconBack={
                    <PencilIcon
                      className={classNames(defaultcss.all, sty.svg__dkIS)}
                      role={"img"}
                    />
                  }
                  long={"long" as const}
                  title={"Building the Simple Ecosystem"}
                />
              </p.Stack>

              <div className={classNames(defaultcss.all, sty.box__aeRwq)}>
                <img
                  alt={""}
                  className={classNames(defaultcss.img, sty.img__ljdKn)}
                  role={"img"}
                  src={
                    "/plasmic/simple_light_landing_page/images/simpleProject.png"
                  }
                />

                <img
                  alt={""}
                  className={classNames(defaultcss.img, sty.img__voffq)}
                  role={"img"}
                  src={"/plasmic/simple_light_landing_page/images/task.png"}
                />
              </div>
            </p.Stack>

            <div className={classNames(defaultcss.all, sty.box__b8Jxa)}>
              <div className={classNames(defaultcss.all, sty.box__a38YD)} />

              <Section
                className={classNames("__wab_instance", sty.section__nRdbn)}
                subtitle={
                  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                }
                title={"How Simple works"}
              />

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__k6Wsy)}
              >
                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__zcS5W
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <SwapIcon
                      className={classNames(defaultcss.all, sty.svg__zt0Eg)}
                      role={"img"}
                    />
                  }
                  title={"Initial Contact"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard___5JBxl
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <SlotIcon
                      className={classNames(defaultcss.all, sty.svg__x0Xab)}
                      role={"img"}
                    />
                  }
                  title={"Discovery Session"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__pjoSp
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <CycleIcon
                      className={classNames(defaultcss.all, sty.svg__svW4)}
                      role={"img"}
                    />
                  }
                  title={"Contracting"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard___0NsuX
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <HammerIcon
                      className={classNames(defaultcss.all, sty.svg__t1Sdt)}
                      role={"img"}
                    />
                  }
                  title={"Fast Prototyping"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__tBbnx
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <PencilIcon
                      className={classNames(defaultcss.all, sty.svg__kGiPa)}
                      role={"img"}
                    />
                  }
                  title={"Design Phase"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__zl0PN
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <LightningIcon
                      className={classNames(defaultcss.all, sty.svg___3AJph)}
                      role={"img"}
                    />
                  }
                  title={"Develop & Launch"}
                />
              </p.Stack>

              <div className={classNames(defaultcss.all, sty.box__iJaPi)} />
            </div>

            <Section
              className={classNames("__wab_instance", sty.section__fyopE)}
            />

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__uIeP)}
            >
              <FacebookLogoIcon
                className={classNames(defaultcss.all, sty.svg___8SSaa)}
                role={"img"}
              />

              <TinderLogoIcon
                className={classNames(defaultcss.all, sty.svg__sLaAx)}
                role={"img"}
              />

              <AirbnbLogoIcon
                className={classNames(defaultcss.all, sty.svg__u9H9W)}
                role={"img"}
              />

              <HubspotLogoIcon
                className={classNames(defaultcss.all, sty.svg__zrAzA)}
                role={"img"}
              />

              <AmazonLogoIcon
                className={classNames(defaultcss.all, sty.svg__gJkRj)}
                role={"img"}
              />
            </p.Stack>

            <Testimonial
              data-plasmic-name={"testimonial"}
              data-plasmic-override={overrides.testimonial}
              className={classNames("__wab_instance", sty.testimonial)}
            />

            <HomeCta
              data-plasmic-name={"homeCta"}
              data-plasmic-override={overrides.homeCta}
              className={classNames("__wab_instance", sty.homeCta)}
            />

            <Footer
              data-plasmic-name={"footer"}
              data-plasmic-override={overrides.footer}
              className={classNames("__wab_instance", sty.footer)}
            />
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "topSection", "testimonial", "homeCta", "footer"],
  header: ["header"],
  topSection: ["topSection"],
  testimonial: ["testimonial"],
  homeCta: ["homeCta"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  topSection: typeof TopSection;
  testimonial: typeof Testimonial;
  homeCta: typeof HomeCta;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHome__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicHome__VariantsArgs;
  args?: PlasmicHome__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicHome__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicHome__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHome__ArgProps,
      internalVariantPropNames: PlasmicHome__VariantProps
    });

    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    topSection: makeNodeComponent("topSection"),
    testimonial: makeNodeComponent("testimonial"),
    homeCta: makeNodeComponent("homeCta"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps
  }
);

export default PlasmicHome;
/* prettier-ignore-end */
