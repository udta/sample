(function($) {
	window.GSWebRTC = function() {
		var me = this;
		me.init();
	}

	GSWebRTC.prototype = {
		init: function() {
			var me = this;
			if ($("#anonymousWebRTC").length > 0) {
				$("#anonymousWebRTC").show();
				// var mWindow = top.frames['frameDialog'];
				// if (mWindow.sipRegister) {					
				// 	mWindow.sipRegister();
				// }
				return;
			}
			//CSS for anonymousWebRTC
			var anonymousWebRTCSS = '<style id="css-anonymousWebRTC" type="text/css">' +
				'#anonymousWebRTC{ display: none;}' +
				'#anonymousWebRTC .ul-style{ list-style: none; margin: 0; padding: 0; border: 0;font-size: 100%;font: inherit;vertical-align: baseline;box-sizing: border-box;height: 28px;}' +
				'#anonymousWebRTC .ul-style li { float: right; height: 28px;}' +
				'#anonymousWebRTC .btn{ width: 28px; height: 28px; display: inline-block; margin: 0; padding: 0; outline：none; border: none; background: #2B2118; background-position: center; background-repeat: no-repeat; color: #fff; text-align: center; text-decoration: none; font-size: .9em; cursor: pointer;}' +
				'#anonymousWebRTC .btn.btn-narrow{ background-image: url("./anonymousWebRTC/webRTC/images/large.png");}' +
				'#anonymousWebRTC .btn.btn-narrow:hover{ background-image: url("./anonymousWebRTC/webRTC/images/large_hover.png");}' +
				'#anonymousWebRTC .btn.btn-narrow:focus{ background-image: url("./anonymousWebRTC/webRTC/images/large_pressed.png");}' +
				'#anonymousWebRTC .btn.btn-large{ background-image: url("./anonymousWebRTC/webRTC/images/large.png");}' +
				'#anonymousWebRTC .btn.btn-large:hover{ background-image: url("./anonymousWebRTC/webRTC/images/large_hover.png");}' +
				'#anonymousWebRTC .btn.btn-large:focus{ background-image: url("./anonymousWebRTC/webRTC/images/large_pressed.png");}' +
				'#anonymousWebRTC .btn.btn-close{background-image: url("./anonymousWebRTC/webRTC/images/large.png");}' +
				'#anonymousWebRTC .btn.btn-close:hover{background-image: url("./anonymousWebRTC/webRTC/images/large_hover.png");}' +
				'#anonymousWebRTC .btn.btn-close:focus{background-image: url("./anonymousWebRTC/webRTC/images/large_pressed.png");}' +
				'</style>';
			//CSS styles are only added once.
			if ($('#css-anonymousWebRTC').length <= 0) {

				// Pengcheng Zou Add.
				var head = $(document).find("head")
				$(anonymousWebRTCSS).appendTo(head);
			}
			me.render();
		},
		render: function() {
			var anonymousWebRTC = $("<div id='anonymousWebRTC'>").css({
				position: "fixed",
				bottom: "35px",
				right: 0,
				width: "500px",
				height: "500px",
				marginTop: "-104px"
			}).appendTo("body");

			var title = $("<div>").css({
				background: "#181A1B",
				height: "28px"
			}).appendTo(anonymousWebRTC);

			var titleUl = $("<ul>").addClass("ul-style").appendTo(title);
			var narrowLi = $("<li>").appendTo(titleUl);
			var closeLi = $("<li>").appendTo(titleUl);
			var largeLi = $("<li>").appendTo(titleUl);
			// var narrowBtn = $("<button>").addClass("btn btn-narrow").appendTo(narrowLi);
			var largeBtn = $("<button>").addClass("btn btn-large").appendTo(largeLi);
			var closeBtn = $("<button>x</button>").addClass("btn").appendTo(closeLi);
			$("<iframe>").attr({
				id: "frameDialog",
				name: "frameDialog",
				width: "100%",
				height: "100%",
				scrolling: "no",
				marginwidth: "0",
				marginheight: "0",
				frameborder: "0",
				src: "./anonymousWebRTC/webRTC.html"
			}).appendTo(anonymousWebRTC);

			closeBtn.click(function(event) {
				$("#anonymousWebRTC").hide();
			});
		}
	}
	new GSWebRTC();
})(jQuery)