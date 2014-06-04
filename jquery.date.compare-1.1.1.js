/* 
 * jQuery.dateCompare v1.1.1.
 * jQuery Plugin to order a range of dates or validate if any date is larger than other.
 * (c)2014 Rafael Maruta - rafaelmaruta@gmail.com - www.lotuscreative.com.br.
 * Released under the MIT license.
 * 
 * It only accepts dates at numerical format like DD/MM/YYYY, MM/YYYY, YYYY-MM-DD or YYYY-MM.
 * 
 * Accepts three parameters: type, arrayOrder and format.
 * 
 * Use type:'asArray' if you wanna an ordering array return or 'just2' if you just wanna compare two dates.
 * If the first date in the selector is larger than the second, it will return false. It will consider the DOM ordering.
 * 
 * Use arrayOrder:'ASC' if you wanna the array return to be at ascending order. The default value is 'DESC'.
 * 
 * Use format:'-' if you wanna the YYYY-MM-DD or YYYY-MM format. The default value is '/' DD/MM/YYYY or MM/YYYY.
 * 
 * Call examples:
 * alert($('#div1,#div2').dateCompare({type:'just2'}));
 * window.console.log($('#div1,#div2,#div3,#div4').dateCompare({arrayOrder:'ASC',format:'-'}));
 * 
 * Any sugestions please contact me.
*/

(function()
{
	$.fn.dateCompare = function(options)
	{
		/* Setting options. They can be overwritten */
		var opts = $.extend({},$.fn.dateCompare.defaults,options);
		
		/* Array dates holder */
		var arr = [];		
		
		/* Checks the tag name of each selection to hold its value and apply the checker push function */
		this.each(function()
		{
			switch ($(this).get(0).tagName)
			{
				case 'INPUT':
					chkPush($(this).val());
				break;
				case 'TEXTAREA':
					chkPush($(this).val());
				break;
				case 'SELECT':
					chkPush($(this).val());
				break;
				default:
					chkPush($(this).text());
				break;
			};
		});
		
		/* Checks if the chosen return is 'asArray' or if the array is holding more than 2 elements */
		if (opts.type == 'asArray' || arr.length > 2)
		{
			/* Checks the chosen ordering type */
			if (opts.arrayOrder == 'ASC')
			{
				arr.sort();
			}
			else
			{
				arr.sort().reverse();
			};
			
			/* Extends the Array native JavaScript object to apply a function to each index value */
			Array.prototype.map = function(x)
			{
				for (i = 0; i < this.length; i++)
				{
					this[i] = x(this[i]);
				};
			};
			
			/* Checks the requested format output, formats it and applies the function on the array */
			if (opts.format == '/')
			{
				arr.map(format);
			};
			
			/* Returns the ordering array */
			return arr;
		}
		/* Checks if the chosen type is 'just2' and the array length is equal to 2 */
		else if (opts.type == 'just2' && arr.length == 2)
		{
			/* If the first value is shorter, it returns true */
			if (arr[0] <= arr[1])
			{
				return true;
			}
			else
			{
				return false;
			};
		}
		/* If there's less than 2 elements in the selector */
		else
		{
			return 'Missing element.';
		};
		
		/* Private method which checks the date format, formats it and pushes in the array holder */
		function chkPush(x,y)
		{
			if (x.indexOf('/') > -1)
			{
				arr.push(unformat(x));
			}
			else
			{
				arr.push(x);
			};
		};
		
		/* Private method which formats the date to DD/MM/YYYY */
		function format(x)
		{
			var x = x.split('-').reverse().join('/');
			return x;
		};
		
		/* Private method which formats the date to YYYY-MM-DD */
		function unformat(x)
		{
			var x = x.split('/').reverse().join('-');
			return x;
		};
	};
	
	/* Default properties values */
	$.fn.dateCompare.defaults = {
		type:'asArray',
		arrayOrder:'DESC',
		format:'/'
	};
}(jQuery));
