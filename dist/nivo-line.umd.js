(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('@nivo/core'), require('@nivo/colors'), require('@nivo/axes'), require('@nivo/legends'), require('@nivo/tooltip'), require('d3-shape'), require('@nivo/scales'), require('prop-types'), require('react/jsx-runtime'), require('@react-spring/web'), require('@nivo/voronoi')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', '@nivo/core', '@nivo/colors', '@nivo/axes', '@nivo/legends', '@nivo/tooltip', 'd3-shape', '@nivo/scales', 'prop-types', 'react/jsx-runtime', '@react-spring/web', '@nivo/voronoi'], factory) :
  (global = global || self, factory(global.nivo = global.nivo || {}, global.React, global.nivo, global.nivo, global.nivo, global.nivo, global.nivo, global.d3, global.nivo, global.PropTypes, global['react/jsx-runtime'], global['@react-spring/web'], global.nivo));
}(this, (function (exports, react, core, colors, axes, legends, tooltip, d3Shape, scales, PropTypes, jsxRuntime, web, voronoi) { 'use strict';

  PropTypes = PropTypes && Object.prototype.hasOwnProperty.call(PropTypes, 'default') ? PropTypes['default'] : PropTypes;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  var LinePointTooltip = function LinePointTooltip(_ref) {
    var point = _ref.point;
    return jsxRuntime.jsx(tooltip.BasicTooltip, {
      id: jsxRuntime.jsxs("span", {
        children: ["x: ", jsxRuntime.jsx("strong", {
          children: point.data.xFormatted
        }), ", y:", ' ', jsxRuntime.jsx("strong", {
          children: point.data.yFormatted
        })]
      }),
      enableChip: true,
      color: point.serieColor
    });
  };
  var PointTooltip = react.memo(LinePointTooltip);

  var SliceTooltip = function SliceTooltip(_ref) {
    var slice = _ref.slice,
        axis = _ref.axis;
    var theme = core.useTheme();
    var otherAxis = axis === 'x' ? 'y' : 'x';
    return jsxRuntime.jsx(tooltip.TableTooltip, {
      rows: slice.points.map(function (point) {
        return [jsxRuntime.jsx(tooltip.Chip, {
          color: point.serieColor,
          style: theme.tooltip.chip
        }, "chip"), point.serieId, jsxRuntime.jsx("span", {
          style: theme.tooltip.tableCellValue,
          children: point.data["".concat(otherAxis, "Formatted")]
        }, "value")];
      })
    });
  };
  var SliceTooltip$1 = react.memo(SliceTooltip);

  var commonPropTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      data: PropTypes.arrayOf(PropTypes.shape({
        x: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]),
        y: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)])
      })).isRequired
    })).isRequired,
    xScale: PropTypes.object.isRequired,
    xFormat: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    yScale: PropTypes.object.isRequired,
    yFormat: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    layers: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.oneOf(['grid', 'markers', 'axes', 'areas', 'crosshair', 'lines', 'slices', 'points', 'mesh', 'legends']), PropTypes.func])).isRequired,
    curve: core.lineCurvePropType.isRequired,
    axisTop: axes.axisPropType,
    axisRight: axes.axisPropType,
    axisBottom: axes.axisPropType,
    axisLeft: axes.axisPropType,
    enableGridX: PropTypes.bool.isRequired,
    enableGridY: PropTypes.bool.isRequired,
    gridXValues: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]))]),
    gridYValues: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]))]),
    enablePoints: PropTypes.bool.isRequired,
    pointSymbol: PropTypes.func,
    pointSize: PropTypes.number.isRequired,
    pointColor: PropTypes.any.isRequired,
    pointBorderWidth: PropTypes.number.isRequired,
    pointBorderColor: PropTypes.any.isRequired,
    enablePointLabel: PropTypes.bool.isRequired,
    pointLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
    markers: PropTypes.arrayOf(PropTypes.shape({
      axis: PropTypes.oneOf(['x', 'y']).isRequired,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
      style: PropTypes.object
    })),
    colors: colors.ordinalColorsPropType.isRequired,
    enableArea: PropTypes.bool.isRequired,
    areaOpacity: PropTypes.number.isRequired,
    areaBlendMode: core.blendModePropType.isRequired,
    areaBaselineValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
    lineWidth: PropTypes.number.isRequired,
    legends: PropTypes.arrayOf(PropTypes.shape(legends.LegendPropShape)).isRequired,
    isInteractive: PropTypes.bool.isRequired,
    debugMesh: PropTypes.bool.isRequired,
    tooltip: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
    enableSlices: PropTypes.oneOf(['x', 'y', false]).isRequired,
    debugSlices: PropTypes.bool.isRequired,
    sliceTooltip: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
    enableCrosshair: PropTypes.bool.isRequired,
    crosshairType: PropTypes.string.isRequired
  };
  var LinePropTypes = _objectSpread2(_objectSpread2(_objectSpread2({}, commonPropTypes), {}, {
    enablePointLabel: PropTypes.bool.isRequired,
    role: PropTypes.string.isRequired,
    useMesh: PropTypes.bool.isRequired
  }, core.motionPropTypes), core.defsPropTypes);
  var LineCanvasPropTypes = _objectSpread2({
    pixelRatio: PropTypes.number.isRequired
  }, commonPropTypes);
  var commonDefaultProps = {
    curve: 'linear',
    xScale: {
      type: 'point'
    },
    yScale: {
      type: 'linear',
      min: 0,
      max: 'auto'
    },
    layers: ['grid', 'markers', 'axes', 'areas', 'crosshair', 'lines', 'points', 'slices', 'mesh', 'legends'],
    axisBottom: {},
    axisLeft: {},
    enableGridX: true,
    enableGridY: true,
    enablePoints: true,
    pointSize: 6,
    pointColor: {
      from: 'color'
    },
    pointBorderWidth: 0,
    pointBorderColor: {
      theme: 'background'
    },
    enablePointLabel: false,
    pointLabel: 'yFormatted',
    colors: {
      scheme: 'nivo'
    },
    enableArea: false,
    areaBaselineValue: 0,
    areaOpacity: 0.2,
    areaBlendMode: 'normal',
    lineWidth: 2,
    legends: [],
    isInteractive: true,
    tooltip: PointTooltip,
    enableSlices: false,
    debugSlices: false,
    sliceTooltip: SliceTooltip$1,
    debugMesh: false,
    enableCrosshair: true,
    crosshairType: 'bottom-left'
  };
  var LineDefaultProps = _objectSpread2(_objectSpread2({}, commonDefaultProps), {}, {
    enablePointLabel: false,
    useMesh: false,
    animate: true,
    motionConfig: 'gentle',
    defs: [],
    fill: [],
    role: 'img'
  });
  var LineCanvasDefaultProps = _objectSpread2(_objectSpread2({}, commonDefaultProps), {}, {
    pixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1
  });

  var useLineGenerator = function useLineGenerator(_ref) {
    var curve = _ref.curve;
    return react.useMemo(function () {
      return d3Shape.line().defined(function (d) {
        return d.x !== null && d.y !== null;
      }).x(function (d) {
        return d.x;
      }).y(function (d) {
        return d.y;
      }).curve(core.curveFromProp(curve));
    }, [curve]);
  };
  var useAreaGenerator = function useAreaGenerator(_ref2) {
    var curve = _ref2.curve,
        yScale = _ref2.yScale,
        areaBaselineValue = _ref2.areaBaselineValue;
    return react.useMemo(function () {
      return d3Shape.area().defined(function (d) {
        return d.x !== null && d.y !== null;
      }).x(function (d) {
        return d.x;
      }).y1(function (d) {
        return d.y;
      }).y0(function (d) {
        return d.y0;
      }).curve(core.curveFromProp(curve));
    }, [curve, yScale, areaBaselineValue]);
  };
  var usePoints = function usePoints(_ref3) {
    var series = _ref3.series,
        getPointColor = _ref3.getPointColor,
        getPointBorderColor = _ref3.getPointBorderColor,
        formatX = _ref3.formatX,
        formatY = _ref3.formatY;
    return react.useMemo(function () {
      return series.reduce(function (acc, serie) {
        return [].concat(_toConsumableArray(acc), _toConsumableArray(serie.data.filter(function (datum) {
          return datum.position.x !== null && datum.position.y !== null;
        }).map(function (datum, i) {
          var point = {
            id: "".concat(serie.id, ".").concat(i),
            index: acc.length + i,
            serieId: serie.id,
            serieColor: serie.color,
            x: datum.position.x,
            y: datum.position.y
          };
          point.color = getPointColor(serie);
          point.borderColor = getPointBorderColor(point);
          point.data = _objectSpread2(_objectSpread2({}, datum.data), {}, {
            xFormatted: formatX(datum.data.x),
            yFormatted: formatY(datum.data.y)
          });
          return point;
        })));
      }, []);
    }, [series, getPointColor, getPointBorderColor, formatX, formatY]);
  };
  var useSlices = function useSlices(_ref4) {
    var enableSlices = _ref4.enableSlices,
        points = _ref4.points,
        width = _ref4.width,
        height = _ref4.height;
    return react.useMemo(function () {
      if (enableSlices === false) return [];
      if (enableSlices === 'x') {
        var map = new Map();
        points.forEach(function (point) {
          if (point.data.x === null || point.data.y === null) return;
          if (!map.has(point.x)) map.set(point.x, [point]);else map.get(point.x).push(point);
        });
        return Array.from(map.entries()).sort(function (a, b) {
          return a[0] - b[0];
        }).map(function (_ref5, i, slices) {
          var _ref6 = _slicedToArray(_ref5, 2),
              x = _ref6[0],
              slicePoints = _ref6[1];
          var prevSlice = slices[i - 1];
          var nextSlice = slices[i + 1];
          var x0;
          if (!prevSlice) x0 = x;else x0 = x - (x - prevSlice[0]) / 2;
          var sliceWidth;
          if (!nextSlice) sliceWidth = width - x0;else sliceWidth = x - x0 + (nextSlice[0] - x) / 2;
          return {
            id: x,
            x0: x0,
            x: x,
            y0: 0,
            y: 0,
            width: sliceWidth,
            height: height,
            points: slicePoints.reverse()
          };
        });
      } else if (enableSlices === 'y') {
        var _map = new Map();
        points.forEach(function (point) {
          if (point.data.x === null || point.data.y === null) return;
          if (!_map.has(point.y)) _map.set(point.y, [point]);else _map.get(point.y).push(point);
        });
        return Array.from(_map.entries()).sort(function (a, b) {
          return a[0] - b[0];
        }).map(function (_ref7, i, slices) {
          var _ref8 = _slicedToArray(_ref7, 2),
              y = _ref8[0],
              slicePoints = _ref8[1];
          var prevSlice = slices[i - 1];
          var nextSlice = slices[i + 1];
          var y0;
          if (!prevSlice) y0 = y;else y0 = y - (y - prevSlice[0]) / 2;
          var sliceHeight;
          if (!nextSlice) sliceHeight = height - y0;else sliceHeight = y - y0 + (nextSlice[0] - y) / 2;
          return {
            id: y,
            x0: 0,
            x: 0,
            y0: y0,
            y: y,
            width: width,
            height: sliceHeight,
            points: slicePoints.reverse()
          };
        });
      }
    }, [enableSlices, points]);
  };
  var useLine = function useLine(_ref9) {
    var data = _ref9.data,
        _ref9$xScale = _ref9.xScale,
        xScaleSpec = _ref9$xScale === void 0 ? LineDefaultProps.xScale : _ref9$xScale,
        xFormat = _ref9.xFormat,
        _ref9$yScale = _ref9.yScale,
        yScaleSpec = _ref9$yScale === void 0 ? LineDefaultProps.yScale : _ref9$yScale,
        yFormat = _ref9.yFormat,
        width = _ref9.width,
        height = _ref9.height,
        _ref9$colors = _ref9.colors,
        colors$1 = _ref9$colors === void 0 ? LineDefaultProps.colors : _ref9$colors,
        _ref9$curve = _ref9.curve,
        curve = _ref9$curve === void 0 ? LineDefaultProps.curve : _ref9$curve,
        _ref9$areaBaselineVal = _ref9.areaBaselineValue,
        areaBaselineValue = _ref9$areaBaselineVal === void 0 ? LineDefaultProps.areaBaselineValue : _ref9$areaBaselineVal,
        _ref9$pointColor = _ref9.pointColor,
        pointColor = _ref9$pointColor === void 0 ? LineDefaultProps.pointColor : _ref9$pointColor,
        _ref9$pointBorderColo = _ref9.pointBorderColor,
        pointBorderColor = _ref9$pointBorderColo === void 0 ? LineDefaultProps.pointBorderColor : _ref9$pointBorderColo,
        _ref9$enableSlices = _ref9.enableSlices,
        enableSlices = _ref9$enableSlices === void 0 ? LineDefaultProps.enableSlicesTooltip : _ref9$enableSlices,
        _ref9$enableAreaBetwe = _ref9.enableAreaBetween;
    var formatX = core.useValueFormatter(xFormat);
    var formatY = core.useValueFormatter(yFormat);
    var getColor = colors.useOrdinalColorScale(colors$1, 'id');
    var theme = core.useTheme();
    var getPointColor = colors.useInheritedColor(pointColor, theme);
    var getPointBorderColor = colors.useInheritedColor(pointBorderColor, theme);
    var _useState = react.useState([]),
        _useState2 = _slicedToArray(_useState, 2),
        hiddenIds = _useState2[0],
        setHiddenIds = _useState2[1];
    var _useMemo = react.useMemo(function () {
      return scales.computeXYScalesForSeries(data.filter(function (item) {
        return hiddenIds.indexOf(item.id) === -1;
      }), xScaleSpec, yScaleSpec, width, height);
    }, [data, hiddenIds, xScaleSpec, yScaleSpec, width, height]),
        xScale = _useMemo.xScale,
        yScale = _useMemo.yScale,
        rawSeries = _useMemo.series;
    var _useMemo2 = react.useMemo(function () {
      var dataWithColor = data.map(function (line) {
        return {
          id: line.id,
          label: line.id,
          color: getColor(line)
        };
      });
      var series = dataWithColor.map(function (datum) {
        return _objectSpread2(_objectSpread2({}, rawSeries.find(function (serie) {
          return serie.id === datum.id;
        })), {}, {
          color: datum.color
        });
      }).filter(function (item) {
        return Boolean(item.id);
      });
      var legendData = dataWithColor.map(function (item) {
        return _objectSpread2(_objectSpread2({}, item), {}, {
          hidden: !series.find(function (serie) {
            return serie.id === item.id;
          })
        });
      }).reverse();
      return {
        legendData: legendData,
        series: series
      };
    }, [data, rawSeries, getColor]),
        legendData = _useMemo2.legendData,
        series = _useMemo2.series;
    var toggleSerie = react.useCallback(function (id) {
      setHiddenIds(function (state) {
        return state.indexOf(id) > -1 ? state.filter(function (item) {
          return item !== id;
        }) : [].concat(_toConsumableArray(state), [id]);
      });
    }, []);
    var points = usePoints({
      series: series,
      getPointColor: getPointColor,
      getPointBorderColor: getPointBorderColor,
      formatX: formatX,
      formatY: formatY
    });
    var slices = useSlices({
      enableSlices: enableSlices,
      points: points,
      width: width,
      height: height
    });
    var lineGenerator = useLineGenerator({
      curve: curve
    });
    var areaGenerator = useAreaGenerator({
      curve: curve,
      yScale: yScale,
      areaBaselineValue: areaBaselineValue
    });
    return {
      legendData: legendData,
      toggleSerie: toggleSerie,
      lineGenerator: lineGenerator,
      areaGenerator: areaGenerator,
      getColor: getColor,
      series: series,
      xScale: xScale,
      yScale: yScale,
      slices: slices,
      points: points
    };
  };

  var AreaPath = function AreaPath(_ref) {
    var areaBlendMode = _ref.areaBlendMode,
        areaOpacity = _ref.areaOpacity,
        color = _ref.color,
        fill = _ref.fill,
        path = _ref.path;
    var _useMotionConfig = core.useMotionConfig(),
        animate = _useMotionConfig.animate,
        springConfig = _useMotionConfig.config;
    var animatedPath = core.useAnimatedPath(path);
    var animatedProps = web.useSpring({
      color: color,
      config: springConfig,
      immediate: !animate
    });
    return jsxRuntime.jsx(web.animated.path, {
      d: animatedPath,
      fill: fill ? fill : animatedProps.color,
      fillOpacity: areaOpacity,
      strokeWidth: 0,
      style: {
        mixBlendMode: areaBlendMode
      }
    });
  };
  var Areas = function Areas(_ref2) {
    var areaGenerator = _ref2.areaGenerator,
        areaOpacity = _ref2.areaOpacity,
        areaBlendMode = _ref2.areaBlendMode,
        lines = _ref2.lines;
    var computedLines = lines.slice(0).reverse();
    return jsxRuntime.jsx("g", {
      children: computedLines.map(function (line) {
        return jsxRuntime.jsx(AreaPath, _objectSpread2({
          path: areaGenerator(line.data.map(function (d) {
            return d.position;
          }))
        }, _objectSpread2({
          areaOpacity: areaOpacity,
          areaBlendMode: areaBlendMode
        }, line)), line.id);
      })
    });
  };
  var Areas$1 = react.memo(Areas);

  var LinesItem = function LinesItem(_ref) {
    var lineGenerator = _ref.lineGenerator,
        points = _ref.points,
        color = _ref.color,
        thickness = _ref.thickness;
    var path = react.useMemo(function () {
      return lineGenerator(points);
    }, [lineGenerator, points]);
    var animatedPath = core.useAnimatedPath(path);
    return jsxRuntime.jsx(web.animated.path, {
      d: animatedPath,
      fill: "none",
      strokeWidth: thickness,
      stroke: color
    });
  };
  var LinesItem$1 = react.memo(LinesItem);

  var Lines = function Lines(_ref) {
    var lines = _ref.lines,
        lineGenerator = _ref.lineGenerator,
        lineWidth = _ref.lineWidth;
    return lines.slice(0).reverse().map(function (_ref2) {
      var id = _ref2.id,
          data = _ref2.data,
          color = _ref2.color;
      return jsxRuntime.jsx(LinesItem$1, {
        id: id,
        points: data.map(function (d) {
          return d.position;
        }),
        lineGenerator: lineGenerator,
        color: color,
        thickness: lineWidth
      }, id);
    });
  };
  var Lines$1 = react.memo(Lines);

  var SlicesItem = function SlicesItem(_ref) {
    var slice = _ref.slice,
        axis = _ref.axis,
        debug = _ref.debug,
        tooltip$1 = _ref.tooltip,
        isCurrent = _ref.isCurrent,
        currentlyHovered = _ref.currentlyHovered,
        setSliceId = _ref.setSliceId,
        current = _ref.current,
        setCurrent = _ref.setCurrent,
        setCurrentlyHovered = _ref.setCurrentlyHovered,
        height = _ref.height,
        onClick = _ref.onClick;
    var _useTooltip = tooltip.useTooltip(),
        showTooltipFromEvent = _useTooltip.showTooltipFromEvent,
        showTooltipAt = _useTooltip.showTooltipAt,
        hideTooltip = _useTooltip.hideTooltip;
    var showSynchTooltip = react.useCallback(function () {
      if (isCurrent) {
        showTooltipAt(react.createElement(tooltip$1, {
          slice: slice,
          axis: axis
        }), [slice.x, height / 2], 'top');
      }
    }, [slice, isCurrent, currentlyHovered, showTooltipAt, tooltip$1]);
    react.useEffect(function () {
      if (current === null) {
        hideTooltip();
      }
    }, [current, hideTooltip]);
    react.useEffect(function () {
      showSynchTooltip();
    }, [showSynchTooltip]);
    var handleMouseEnter = react.useCallback(function (event) {
      showTooltipAt(react.createElement(tooltip$1, {
        slice: slice,
        axis: axis
      }), [slice.x, height / 2], 'top');
      setCurrentlyHovered(true);
      setSliceId && setSliceId(slice.id);
      setCurrent(slice);
    }, [showTooltipFromEvent, tooltip$1, slice]);
    var handleMouseLeave = react.useCallback(function () {
      hideTooltip();
      setSliceId && setSliceId(null);
      setCurrentlyHovered(false);
      setCurrent(null);
    }, [hideTooltip, setSliceId, setCurrentlyHovered]);
    var handleClick = react.useCallback(function (event) {
      onClick && onClick(slice, event);
    }, [onClick]);
    return jsxRuntime.jsx("rect", {
      x: slice.x0,
      y: slice.y0,
      width: slice.width,
      height: slice.height,
      stroke: "red",
      strokeWidth: debug ? 1 : 0,
      strokeOpacity: 0.75,
      fill: "red",
      fillOpacity: isCurrent && debug ? 0.35 : 0,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onClick: handleClick
    });
  };
  var SlicesItem$1 = react.memo(SlicesItem);

  var Slices = function Slices(_ref) {
    var slices = _ref.slices,
        axis = _ref.axis,
        debug = _ref.debug,
        height = _ref.height,
        tooltip = _ref.tooltip,
        current = _ref.current,
        setCurrent = _ref.setCurrent,
        setSliceId = _ref.setSliceId,
        setCurrentlyHovered = _ref.setCurrentlyHovered,
        currentlyHovered = _ref.currentlyHovered,
        onClick = _ref.onClick;
    return slices.map(function (slice) {
      return jsxRuntime.jsx(SlicesItem$1, {
        slice: slice,
        axis: axis,
        debug: debug,
        height: height,
        tooltip: tooltip,
        setCurrent: setCurrent,
        isCurrent: current !== null && current.id === slice.id,
        setSliceId: setSliceId,
        currentlyHovered: currentlyHovered,
        setCurrentlyHovered: setCurrentlyHovered,
        current: current,
        onClick: onClick
      }, slice.id);
    });
  };
  var Slices$1 = react.memo(Slices);

  var Points = function Points(_ref) {
    var points = _ref.points,
        symbol = _ref.symbol,
        size = _ref.size,
        borderWidth = _ref.borderWidth,
        enableLabel = _ref.enableLabel,
        label = _ref.label,
        labelYOffset = _ref.labelYOffset;
    var theme = core.useTheme();
    var getLabel = core.getLabelGenerator(label);
    var mappedPoints = points.reverse().map(function (point) {
      var mappedPoint = {
        id: point.id,
        x: point.x,
        y: point.y,
        datum: point.data,
        fill: point.color,
        stroke: point.borderColor,
        label: enableLabel ? getLabel(point.data) : null
      };
      return mappedPoint;
    });
    return jsxRuntime.jsx("g", {
      children: mappedPoints.map(function (point) {
        return jsxRuntime.jsx(core.DotsItem, {
          x: point.x,
          y: point.y,
          datum: point.datum,
          symbol: symbol,
          size: size,
          color: point.fill,
          borderWidth: borderWidth,
          borderColor: point.stroke,
          label: point.label,
          labelYOffset: labelYOffset,
          theme: theme
        }, point.id);
      })
    });
  };
  var Points$1 = react.memo(Points);

  var Mesh = function Mesh(_ref) {
    var points = _ref.points,
        width = _ref.width,
        height = _ref.height,
        margin = _ref.margin,
        setCurrent = _ref.setCurrent,
        onMouseEnter = _ref.onMouseEnter,
        onMouseMove = _ref.onMouseMove,
        onMouseLeave = _ref.onMouseLeave,
        onClick = _ref.onClick,
        tooltip$1 = _ref.tooltip,
        debug = _ref.debug;
    var _useTooltip = tooltip.useTooltip(),
        showTooltipAt = _useTooltip.showTooltipAt,
        hideTooltip = _useTooltip.hideTooltip;
    var handleMouseEnter = react.useCallback(function (point, event) {
      showTooltipAt(react.createElement(tooltip$1, {
        point: point
      }), [point.x + margin.left, point.y + margin.top], 'top');
      setCurrent(point);
      onMouseEnter && onMouseEnter(point, event);
    }, [setCurrent, showTooltipAt, tooltip$1, onMouseEnter, margin]);
    var handleMouseMove = react.useCallback(function (point, event) {
      showTooltipAt(react.createElement(tooltip$1, {
        point: point
      }), [point.x + margin.left, point.y + margin.top], 'top');
      setCurrent(point);
      onMouseMove && onMouseMove(point, event);
    }, [setCurrent, showTooltipAt, tooltip$1, onMouseMove]);
    var handleMouseLeave = react.useCallback(function (point, event) {
      hideTooltip();
      setCurrent(null);
      onMouseLeave && onMouseLeave(point, event);
    }, [hideTooltip, setCurrent, onMouseLeave]);
    var handleClick = react.useCallback(function (point, event) {
      onClick && onClick(point, event);
    }, [onClick]);
    return jsxRuntime.jsx(voronoi.Mesh, {
      nodes: points,
      width: width,
      height: height,
      onMouseEnter: handleMouseEnter,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      onClick: handleClick,
      debug: debug
    });
  };
  var Mesh$1 = react.memo(Mesh);

  var Line = function Line(props) {
    var data = props.data,
        xScaleSpec = props.xScale,
        xFormat = props.xFormat,
        yScaleSpec = props.yScale,
        yFormat = props.yFormat,
        layers = props.layers,
        curve = props.curve,
        areaBaselineValue = props.areaBaselineValue,
        colors$1 = props.colors,
        partialMargin = props.margin,
        width = props.width,
        height = props.height,
        axisTop = props.axisTop,
        axisRight = props.axisRight,
        axisBottom = props.axisBottom,
        axisLeft = props.axisLeft,
        enableGridX = props.enableGridX,
        enableGridY = props.enableGridY,
        gridXValues = props.gridXValues,
        gridYValues = props.gridYValues,
        lineWidth = props.lineWidth,
        enableArea = props.enableArea,
        enableAreaBetween = props.enableAreaBetween,
        areaOpacity = props.areaOpacity,
        areaBlendMode = props.areaBlendMode,
        enablePoints = props.enablePoints,
        pointSymbol = props.pointSymbol,
        pointSize = props.pointSize,
        pointColor = props.pointColor,
        pointBorderWidth = props.pointBorderWidth,
        pointBorderColor = props.pointBorderColor,
        enablePointLabel = props.enablePointLabel,
        pointLabel = props.pointLabel,
        pointLabelYOffset = props.pointLabelYOffset,
        defs = props.defs,
        fill = props.fill,
        markers = props.markers,
        legends$1 = props.legends,
        isInteractive = props.isInteractive,
        useMesh = props.useMesh,
        debugMesh = props.debugMesh,
        onMouseEnter = props.onMouseEnter,
        onMouseMove = props.onMouseMove,
        onMouseLeave = props.onMouseLeave,
        onClick = props.onClick,
        tooltip$1 = props.tooltip,
        sliceId = props.sliceId,
        setSliceId = props.setSliceId,
        enableSlices = props.enableSlices,
        debugSlices = props.debugSlices,
        sliceTooltip = props.sliceTooltip,
        enableCrosshair = props.enableCrosshair,
        crosshairType = props.crosshairType,
        role = props.role;
    var _useDimensions = core.useDimensions(width, height, partialMargin),
        margin = _useDimensions.margin,
        innerWidth = _useDimensions.innerWidth,
        innerHeight = _useDimensions.innerHeight,
        outerWidth = _useDimensions.outerWidth,
        outerHeight = _useDimensions.outerHeight;
    var _useLine = useLine({
      data: data,
      xScale: xScaleSpec,
      xFormat: xFormat,
      yScale: yScaleSpec,
      yFormat: yFormat,
      width: innerWidth,
      height: innerHeight,
      colors: colors$1,
      curve: curve,
      areaBaselineValue: areaBaselineValue,
      pointColor: pointColor,
      pointBorderColor: pointBorderColor,
      enableSlices: enableSlices,
      enableAreaBetween: enableAreaBetween
    }),
        legendData = _useLine.legendData,
        toggleSerie = _useLine.toggleSerie,
        lineGenerator = _useLine.lineGenerator,
        areaGenerator = _useLine.areaGenerator,
        series = _useLine.series,
        xScale = _useLine.xScale,
        yScale = _useLine.yScale,
        slices = _useLine.slices,
        points = _useLine.points;
    var theme = core.useTheme();
    var getPointColor = colors.useInheritedColor(pointColor, theme);
    var getPointBorderColor = colors.useInheritedColor(pointBorderColor, theme);
    var _useState = react.useState(null),
        _useState2 = _slicedToArray(_useState, 2),
        currentPoint = _useState2[0],
        setCurrentPoint = _useState2[1];
    var _useState3 = react.useState(null),
        _useState4 = _slicedToArray(_useState3, 2),
        currentSlice = _useState4[0],
        setCurrentSlice = _useState4[1];
    var _useState5 = react.useState(false),
        _useState6 = _slicedToArray(_useState5, 2),
        currentlyHovered = _useState6[0],
        setCurrentlyHovered = _useState6[1];
    var _useState7 = react.useState({}),
        _useState8 = _slicedToArray(_useState7, 2),
        sliceByIndex = _useState8[0],
        setSliceByIndex = _useState8[1];
    react.useEffect(function () {
      if (!slices) {
        return;
      }
      var sliceDict = {};
      for (var i = 0; i < slices.length; i++) {
        sliceDict[slices[i].id] = slices[i];
      }
      setSliceByIndex(sliceDict);
    }, [data, slices]);
    react.useEffect(function () {
      if (sliceId == null) {
        setCurrentSlice(null);
      } else if (!currentlyHovered && setSliceId) {
        setCurrentSlice(sliceByIndex[sliceId] || null);
      }
    }, [sliceId, sliceByIndex]);
    var layerById = {
      grid: jsxRuntime.jsx(axes.Grid, {
        theme: theme,
        width: innerWidth,
        height: innerHeight,
        xScale: enableGridX ? xScale : null,
        yScale: enableGridY ? yScale : null,
        xValues: gridXValues,
        yValues: gridYValues
      }, "grid"),
      markers: jsxRuntime.jsx(core.CartesianMarkers, {
        markers: markers,
        width: innerWidth,
        height: innerHeight,
        xScale: xScale,
        yScale: yScale,
        theme: theme
      }, "markers"),
      axes: jsxRuntime.jsx(axes.Axes, {
        xScale: xScale,
        yScale: yScale,
        width: innerWidth,
        height: innerHeight,
        theme: theme,
        top: axisTop,
        right: axisRight,
        bottom: axisBottom,
        left: axisLeft
      }, "axes"),
      areas: null,
      lines: jsxRuntime.jsx(Lines$1, {
        lines: series,
        lineGenerator: lineGenerator,
        lineWidth: lineWidth
      }, "lines"),
      slices: null,
      points: null,
      crosshair: null,
      mesh: null,
      legends: legends$1.map(function (legend, i) {
        return jsxRuntime.jsx(legends.BoxLegendSvg, _objectSpread2(_objectSpread2({}, legend), {}, {
          containerWidth: innerWidth,
          containerHeight: innerHeight,
          data: legend.data || legendData,
          theme: theme,
          toggleSerie: legend.toggleSerie ? toggleSerie : undefined
        }), "legend.".concat(i));
      })
    };
    var boundDefs = core.bindDefs(defs, series, fill);
    if (enableArea) {
      layerById.areas = jsxRuntime.jsx(Areas$1, {
        areaGenerator: areaGenerator,
        areaOpacity: areaOpacity,
        areaBlendMode: areaBlendMode,
        lines: series
      }, "areas");
    }
    if (isInteractive && enableSlices !== false) {
      layerById.slices = jsxRuntime.jsx(Slices$1, {
        slices: slices,
        axis: enableSlices,
        debug: debugSlices,
        height: innerHeight,
        tooltip: sliceTooltip,
        current: currentSlice,
        setCurrent: setCurrentSlice,
        setCurrentlyHovered: setCurrentlyHovered,
        setSliceId: setSliceId,
        currentlyHovered: currentlyHovered,
        onClick: onClick
      }, "slices");
    }
    if (enablePoints) {
      layerById.points = jsxRuntime.jsx(Points$1, {
        points: points,
        symbol: pointSymbol,
        size: pointSize,
        color: getPointColor,
        borderWidth: pointBorderWidth,
        borderColor: getPointBorderColor,
        enableLabel: enablePointLabel,
        label: pointLabel,
        labelYOffset: pointLabelYOffset
      }, "points");
    }
    if (isInteractive && enableCrosshair) {
      if (currentPoint !== null) {
        layerById.crosshair = jsxRuntime.jsx(tooltip.Crosshair, {
          width: innerWidth,
          height: innerHeight,
          x: currentPoint.x,
          y: currentPoint.y,
          type: crosshairType
        }, "crosshair");
      }
      if (currentSlice !== null) {
        layerById.crosshair = jsxRuntime.jsx(tooltip.Crosshair, {
          width: innerWidth,
          height: innerHeight,
          x: currentSlice.x,
          y: currentSlice.y,
          type: enableSlices
        }, "crosshair");
      }
    }
    if (isInteractive && useMesh && enableSlices === false) {
      layerById.mesh = jsxRuntime.jsx(Mesh$1, {
        points: points,
        width: innerWidth,
        height: innerHeight,
        margin: margin,
        current: currentPoint,
        setCurrent: setCurrentPoint,
        onMouseEnter: onMouseEnter,
        onMouseMove: onMouseMove,
        onMouseLeave: onMouseLeave,
        onClick: onClick,
        tooltip: tooltip$1,
        debug: debugMesh
      }, "mesh");
    }
    return jsxRuntime.jsx(core.SvgWrapper, {
      defs: boundDefs,
      width: outerWidth,
      height: outerHeight,
      margin: margin,
      role: role,
      children: layers.map(function (layer, i) {
        if (typeof layer === 'function') {
          return jsxRuntime.jsx(react.Fragment, {
            children: layer(_objectSpread2(_objectSpread2({}, props), {}, {
              innerWidth: innerWidth,
              innerHeight: innerHeight,
              series: series,
              slices: slices,
              points: points,
              xScale: xScale,
              yScale: yScale,
              lineGenerator: lineGenerator,
              areaGenerator: areaGenerator,
              currentPoint: currentPoint,
              setCurrentPoint: setCurrentPoint,
              currentSlice: currentSlice,
              setCurrentSlice: setCurrentSlice
            }))
          }, i);
        }
        return layerById[layer];
      })
    });
  };
  Line.defaultProps = LineDefaultProps;
  var Line$1 = core.withContainer(Line);

  var ResponsiveLine = function ResponsiveLine(props) {
    return jsxRuntime.jsx(core.ResponsiveWrapper, {
      children: function children(_ref) {
        var width = _ref.width,
            height = _ref.height;
        return jsxRuntime.jsx(Line$1, _objectSpread2({
          width: width,
          height: height
        }, props));
      }
    });
  };

  var LineCanvas = function LineCanvas(_ref) {
    var width = _ref.width,
        height = _ref.height,
        partialMargin = _ref.margin,
        pixelRatio = _ref.pixelRatio,
        data = _ref.data,
        xScaleSpec = _ref.xScale,
        xFormat = _ref.xFormat,
        yScaleSpec = _ref.yScale,
        yFormat = _ref.yFormat,
        curve = _ref.curve,
        layers = _ref.layers,
        colors = _ref.colors,
        lineWidth = _ref.lineWidth,
        enableArea = _ref.enableArea,
        areaBaselineValue = _ref.areaBaselineValue,
        areaOpacity = _ref.areaOpacity,
        enablePoints = _ref.enablePoints,
        pointSize = _ref.pointSize,
        pointColor = _ref.pointColor,
        pointBorderWidth = _ref.pointBorderWidth,
        pointBorderColor = _ref.pointBorderColor,
        enableGridX = _ref.enableGridX,
        gridXValues = _ref.gridXValues,
        enableGridY = _ref.enableGridY,
        gridYValues = _ref.gridYValues,
        axisTop = _ref.axisTop,
        axisRight = _ref.axisRight,
        axisBottom = _ref.axisBottom,
        axisLeft = _ref.axisLeft,
        legends$1 = _ref.legends,
        isInteractive = _ref.isInteractive,
        debugMesh = _ref.debugMesh,
        onMouseLeave = _ref.onMouseLeave,
        onClick = _ref.onClick,
        tooltip$1 = _ref.tooltip,
        canvasRef = _ref.canvasRef;
    var canvasEl = react.useRef(null);
    var _useDimensions = core.useDimensions(width, height, partialMargin),
        margin = _useDimensions.margin,
        innerWidth = _useDimensions.innerWidth,
        innerHeight = _useDimensions.innerHeight,
        outerWidth = _useDimensions.outerWidth,
        outerHeight = _useDimensions.outerHeight;
    var theme = core.useTheme();
    var _useState = react.useState(null),
        _useState2 = _slicedToArray(_useState, 2),
        currentPoint = _useState2[0],
        setCurrentPoint = _useState2[1];
    var _useLine = useLine({
      data: data,
      xScale: xScaleSpec,
      xFormat: xFormat,
      yScale: yScaleSpec,
      yFormat: yFormat,
      width: innerWidth,
      height: innerHeight,
      colors: colors,
      curve: curve,
      areaBaselineValue: areaBaselineValue,
      pointColor: pointColor,
      pointBorderColor: pointBorderColor
    }),
        lineGenerator = _useLine.lineGenerator,
        areaGenerator = _useLine.areaGenerator,
        series = _useLine.series,
        xScale = _useLine.xScale,
        yScale = _useLine.yScale,
        points = _useLine.points;
    var _useVoronoiMesh = voronoi.useVoronoiMesh({
      points: points,
      width: innerWidth,
      height: innerHeight,
      debug: debugMesh
    }),
        delaunay = _useVoronoiMesh.delaunay,
        voronoi$1 = _useVoronoiMesh.voronoi;
    react.useEffect(function () {
      if (canvasRef) {
        canvasRef.current = canvasEl.current;
      }
      canvasEl.current.width = outerWidth * pixelRatio;
      canvasEl.current.height = outerHeight * pixelRatio;
      var ctx = canvasEl.current.getContext('2d');
      ctx.scale(pixelRatio, pixelRatio);
      ctx.fillStyle = theme.background;
      ctx.fillRect(0, 0, outerWidth, outerHeight);
      ctx.translate(margin.left, margin.top);
      layers.forEach(function (layer) {
        if (typeof layer === 'function') {
          layer({
            ctx: ctx,
            innerWidth: innerWidth,
            innerHeight: innerHeight,
            series: series,
            points: points,
            xScale: xScale,
            yScale: yScale,
            lineWidth: lineWidth,
            lineGenerator: lineGenerator,
            areaGenerator: areaGenerator,
            currentPoint: currentPoint,
            setCurrentPoint: setCurrentPoint
          });
        }
        if (layer === 'grid' && theme.grid.line.strokeWidth > 0) {
          ctx.lineWidth = theme.grid.line.strokeWidth;
          ctx.strokeStyle = theme.grid.line.stroke;
          enableGridX && axes.renderGridLinesToCanvas(ctx, {
            width: innerWidth,
            height: innerHeight,
            scale: xScale,
            axis: 'x',
            values: gridXValues
          });
          enableGridY && axes.renderGridLinesToCanvas(ctx, {
            width: innerWidth,
            height: innerHeight,
            scale: yScale,
            axis: 'y',
            values: gridYValues
          });
        }
        if (layer === 'axes') {
          axes.renderAxesToCanvas(ctx, {
            xScale: xScale,
            yScale: yScale,
            width: innerWidth,
            height: innerHeight,
            top: axisTop,
            right: axisRight,
            bottom: axisBottom,
            left: axisLeft,
            theme: theme
          });
        }
        if (layer === 'areas' && enableArea === true) {
          ctx.save();
          ctx.globalAlpha = areaOpacity;
          areaGenerator.context(ctx);
          series.forEach(function (serie) {
            ctx.fillStyle = serie.color;
            ctx.beginPath();
            areaGenerator(serie.data.map(function (d) {
              return d.position;
            }));
            ctx.fill();
          });
          ctx.restore();
        }
        if (layer === 'lines') {
          lineGenerator.context(ctx);
          series.forEach(function (serie) {
            ctx.strokeStyle = serie.color;
            ctx.lineWidth = lineWidth;
            ctx.beginPath();
            lineGenerator(serie.data.map(function (d) {
              return d.position;
            }));
            ctx.stroke();
          });
        }
        if (layer === 'points' && enablePoints === true && pointSize > 0) {
          points.forEach(function (point) {
            ctx.fillStyle = point.color;
            ctx.beginPath();
            ctx.arc(point.x, point.y, pointSize / 2, 0, 2 * Math.PI);
            ctx.fill();
            if (pointBorderWidth > 0) {
              ctx.strokeStyle = point.borderColor;
              ctx.lineWidth = pointBorderWidth;
              ctx.stroke();
            }
          });
        }
        if (layer === 'mesh' && debugMesh === true) {
          voronoi.renderVoronoiToCanvas(ctx, voronoi$1);
          if (currentPoint) {
            voronoi.renderVoronoiCellToCanvas(ctx, voronoi$1, currentPoint.index);
          }
        }
        if (layer === 'legends') {
          var legendData = series.map(function (serie) {
            return {
              id: serie.id,
              label: serie.id,
              color: serie.color
            };
          }).reverse();
          legends$1.forEach(function (legend) {
            legends.renderLegendToCanvas(ctx, _objectSpread2(_objectSpread2({}, legend), {}, {
              data: legend.data || legendData,
              containerWidth: innerWidth,
              containerHeight: innerHeight,
              theme: theme
            }));
          });
        }
      });
    }, [canvasEl, outerWidth, outerHeight, layers, theme, lineGenerator, series, xScale, yScale, enableGridX, gridXValues, enableGridY, gridYValues, axisTop, axisRight, axisBottom, axisLeft, legends$1, points, enablePoints, pointSize, currentPoint]);
    var getPointFromMouseEvent = react.useCallback(function (event) {
      var _getRelativeCursor = core.getRelativeCursor(canvasEl.current, event),
          _getRelativeCursor2 = _slicedToArray(_getRelativeCursor, 2),
          x = _getRelativeCursor2[0],
          y = _getRelativeCursor2[1];
      if (!core.isCursorInRect(margin.left, margin.top, innerWidth, innerHeight, x, y)) return null;
      var pointIndex = delaunay.find(x - margin.left, y - margin.top);
      return points[pointIndex];
    }, [canvasEl, margin, innerWidth, innerHeight, delaunay]);
    var _useTooltip = tooltip.useTooltip(),
        showTooltipFromEvent = _useTooltip.showTooltipFromEvent,
        hideTooltip = _useTooltip.hideTooltip;
    var handleMouseHover = react.useCallback(function (event) {
      var point = getPointFromMouseEvent(event);
      setCurrentPoint(point);
      if (point) {
        showTooltipFromEvent(react.createElement(tooltip$1, {
          point: point
        }), event);
      } else {
        hideTooltip();
      }
    }, [getPointFromMouseEvent, setCurrentPoint, showTooltipFromEvent, hideTooltip, tooltip$1]);
    var handleMouseLeave = react.useCallback(function (event) {
      hideTooltip();
      setCurrentPoint(null);
      currentPoint && onMouseLeave && onMouseLeave(currentPoint, event);
    }, [hideTooltip, setCurrentPoint, onMouseLeave]);
    var handleClick = react.useCallback(function (event) {
      if (onClick) {
        var point = getPointFromMouseEvent(event);
        point && onClick(point, event);
      }
    }, [getPointFromMouseEvent, onClick]);
    return jsxRuntime.jsx("canvas", {
      ref: canvasEl,
      width: outerWidth * pixelRatio,
      height: outerHeight * pixelRatio,
      style: {
        width: outerWidth,
        height: outerHeight,
        cursor: isInteractive ? 'auto' : 'normal'
      },
      onMouseEnter: isInteractive ? handleMouseHover : undefined,
      onMouseMove: isInteractive ? handleMouseHover : undefined,
      onMouseLeave: isInteractive ? handleMouseLeave : undefined,
      onClick: isInteractive ? handleClick : undefined
    });
  };
  LineCanvas.defaultProps = LineCanvasDefaultProps;
  var LineCanvasWithContainer = core.withContainer(LineCanvas);
  var LineCanvas$1 = react.forwardRef(function (props, ref) {
    return jsxRuntime.jsx(LineCanvasWithContainer, _objectSpread2(_objectSpread2({}, props), {}, {
      canvasRef: ref
    }));
  });

  var ResponsiveLineCanvas = function ResponsiveLineCanvas(props, ref) {
    return jsxRuntime.jsx(core.ResponsiveWrapper, {
      children: function children(_ref) {
        var width = _ref.width,
            height = _ref.height;
        return jsxRuntime.jsx(LineCanvas$1, _objectSpread2(_objectSpread2({
          width: width,
          height: height
        }, props), {}, {
          ref: ref
        }));
      }
    });
  };
  var ResponsiveLineCanvas$1 = react.forwardRef(ResponsiveLineCanvas);

  exports.Line = Line$1;
  exports.LineCanvas = LineCanvas$1;
  exports.LineCanvasDefaultProps = LineCanvasDefaultProps;
  exports.LineCanvasPropTypes = LineCanvasPropTypes;
  exports.LineDefaultProps = LineDefaultProps;
  exports.LinePropTypes = LinePropTypes;
  exports.ResponsiveLine = ResponsiveLine;
  exports.ResponsiveLineCanvas = ResponsiveLineCanvas$1;
  exports.useAreaGenerator = useAreaGenerator;
  exports.useLine = useLine;
  exports.useLineGenerator = useLineGenerator;
  exports.useSlices = useSlices;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=nivo-line.umd.js.map
